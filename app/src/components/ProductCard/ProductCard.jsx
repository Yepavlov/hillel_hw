import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, Card } from 'react-bootstrap';

const ProductCard = ({ product, onDelete, onToggleStatus }) => {
  return (
    <Card
      className={`mb-3 h-100 shadow-sm ${!product.isActive ? 'opacity-75' : ''}`}
    >
      {product.imageUrl && (
        <Card.Img
          variant="top"
          src={product.imageUrl}
          alt={product.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          {product.name}
          <Badge bg={product.isActive ? 'success' : 'secondary'}>
            {product.isActive ? 'Active' : 'Inactive'}
          </Badge>
        </Card.Title>
        <Card.Text className="text-muted small mb-2">
          SKU: {product.sku} | Brand: {product.brand}
        </Card.Text>
        <Card.Text>{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <span className="fs-5 fw-bold text-primary">
              ${product.discountPrice || product.price}
            </span>
            {product.discountPrice && (
              <span className="text-decoration-line-through text-muted ms-2">
                ${product.price}
              </span>
            )}
          </div>
          <Badge bg={product.stock > 0 ? 'info' : 'danger'}>
            In Stock: {product.stock}
          </Badge>
        </div>
      </Card.Body>
      <Card.Footer className="bg-transparent d-flex gap-2">
        <Button
          variant={product.isActive ? 'warning' : 'success'}
          size="sm"
          onClick={() => onToggleStatus(product.id)}
        >
          {product.isActive ? 'Deactivate' : 'Activate'}
        </Button>
        <Button variant="danger" size="sm" onClick={() => onDelete(product.id)}>
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleStatus: PropTypes.func.isRequired,
};

export default ProductCard;
