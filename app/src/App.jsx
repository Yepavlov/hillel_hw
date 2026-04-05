import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import ProductForm from './components/ProductForm/ProductForm';
import ProductList from './components/ProductList/ProductList';
import { useLocalStorage } from './hooks/useLocalStorage';
import './styles/main.scss';

const App = () => {
  const [products, setProducts] = useLocalStorage('admin_products', []);
  const [filterActive, setFilterActive] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleToggleStatus = (id) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p))
    );
  };

  const displayedProducts = filterActive
    ? products.filter((p) => p.isActive)
    : products;

  return (
    <div className="bg-light min-vh-100 py-5">
      <Container>
        <h1 className="mb-4 text-center">Admin Panel: Product Management</h1>

        <Row>
          <Col lg={5} className="mb-4">
            <ProductForm onSubmit={handleAddProduct} />
          </Col>

          <Col lg={7}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Product List ({displayedProducts.length})</h3>
              <Form.Check
                type="switch"
                id="active-filter"
                label="Active only"
                checked={filterActive}
                onChange={(e) => setFilterActive(e.target.checked)}
              />
            </div>
            <ProductList
              products={displayedProducts}
              onDelete={handleDeleteProduct}
              onToggleStatus={handleToggleStatus}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
