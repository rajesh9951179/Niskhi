import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import categorywomen from '../images/categorywomen.png';
import categorymen from '../images/categorymen.png';
import categorychild from '../images/categorychild.png';
import categoryaccesories from '../images/categoryaccesories.png';
import './Category.css';

const CategoryCard = ({ image, label, selected, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <Card
      className="text-center border-0 category-card"
      style={{ backgroundColor: 'transparent', cursor: 'pointer', margin: '0 10px' }}
      onClick={handleClick}
    >
      <Card.Img
        src={image}
        alt={label}
        className={`mt-2 rounded-circle ${selected ? 'selected-category' : ''}`}
        style={{
          width: '60px', 
          height: '70px',
          objectFit: 'cover',
          margin: '0 auto',
        }}
      />
      <Card.Body>
        <Card.Text className="fw-bold" style={{ fontSize: '0.70rem' }}>{label}</Card.Text> 
      </Card.Body>
    </Card>
  );
};

const CategorySection = () => {
  return (
    <Container fluid className="category-section">
      <Row 
        className="d-flex justify-content-center overflow-auto no-gutters" 
        style={{ whiteSpace: 'nowrap', flexWrap: 'nowrap' }}
      >
        <Col xs="auto" className="d-inline-flex align-items-center">
          <CategoryCard image={categorywomen} label="Women" selected link="/womenswear" />
          <CategoryCard image={categorymen} label="Men" link="/menswear" />
          <CategoryCard image={categorychild} label="Kids" link="/kidswear" />
          <CategoryCard image={categoryaccesories} label="Accessories" link="/accessories" />
        </Col>
      </Row>
    </Container>
  );
};

export default CategorySection;
