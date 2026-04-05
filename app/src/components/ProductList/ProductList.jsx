import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products, onDelete, onToggleStatus }) => {
  if (products.length === 0) {
    return (
      <p className="text-muted text-center mt-4">No products created yet.</p>
    );
  }

  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-2">
      {products.map((product) => (
        <Col key={product.id}>
          <ProductCard
            product={product}
            onDelete={onDelete}
            onToggleStatus={onToggleStatus}
          />
        </Col>
      ))}
    </Row>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleStatus: PropTypes.func.isRequired,
};

export default ProductList;
