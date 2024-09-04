import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductDescription from './ProductDescription';

function ProductPage() {
  return (
    <Container>
      <Row>
        
        {/* Product Image */}
        <Col md={6}>
          <ProductImage />
        </Col>

        {/* Product Details */}
        <Col md={6}>
          <ProductDetails />
        </Col>
      </Row>

      {/* Product Description */}
      <Row className="mt-4">
        <Col>
          <ProductDescription />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
