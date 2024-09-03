import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FaHeart} from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';

function NewArrivals() {
  const [showFilter, setShowFilter] = useState(false);
  const [showRelevance, setShowRelevance] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 15990]);
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const itemsPerPage = 6;

  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);

  const handleCloseRelevance = () => setShowRelevance(false);
  const handleShowRelevance = () => setShowRelevance(true);

  const handlePriceChange = (e) => {
    setPrice([e.target.value, price[1]]);
  };

  const handleProductTypeChange = (type) => {
    setSelectedProductTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const clearFilters = () => {
    setPrice([0, 15990]);
    setSelectedProductTypes([]);
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  const dresses = [
    { id: 1, defaultImg: './d11.jpg', hoverImg: './d12.jpg', title: 'ETHNIC WEAR', price: 'Rs. 1500.00', category: 'Ethnic', href: '/ethnic' },
    { id: 2, defaultImg: './d21.jpg', hoverImg: './d22.jpg', title: 'CASUAL WEAR', price: 'Rs. 1200.00', category: 'Casual', href: '/casual' },
    { id: 3, defaultImg: './d31.jpg', hoverImg: './d32.jpg', title: 'FORMAL WEAR', price: 'Rs. 2000.00', category: 'Formal', href: '/formal' },
    { id: 4, defaultImg: './d41.jpg', hoverImg: './d42.jpg', title: 'PARTY WEAR', price: 'Rs. 2500.00', category: 'Party', href: '/party' },
    { id: 5, defaultImg: './d51.webp', hoverImg: './d52.webp', title: 'TRADITIONAL WEAR', price: 'Rs. 1800.00', category: 'Ethnic', href: '/traditional' },
    { id: 6, defaultImg: './d6.1.jpg', hoverImg: './d62.jpg', title: 'SUMMER WEAR', price: 'Rs. 1100.00', category: 'Casual', href: '/summer' },

    
    { id: 7, defaultImg: './d71.jpg', hoverImg: './d72.jpg', title: 'ETHNIC WEAR', price: 'Rs. 1500.00', category: 'Ethnic', href: '/ethnic' },
    { id: 8, defaultImg: './d81.jpg', hoverImg: './d82.jpg', title: 'CASUAL WEAR', price: 'Rs. 1200.00', category: 'Casual', href: '/casual' },
    { id: 9, defaultImg: './d91.jpg', hoverImg: './d92.jpg', title: 'FORMAL WEAR', price: 'Rs. 2000.00', category: 'Formal', href: '/formal' },
    { id: 10, defaultImg: './d101.jpg', hoverImg: './d102.jpg', title: 'PARTY WEAR', price: 'Rs. 2500.00', category: 'Party', href: '/party' },
    { id: 11, defaultImg: './d111.jpg', hoverImg: './d112.jpg', title: 'TRADITIONAL WEAR', price: 'Rs. 1800.00', category: 'Ethnic', href: '/traditional' },
    { id: 12, defaultImg: './d12.1.jpg', hoverImg: './d12.2.jpg', title: 'SUMMER WEAR', price: 'Rs. 1100.00', category: 'Casual', href: '/summer' },
    // Add more dresses as needed
  ];

  const productTypes = ['Ethnic', 'Casual', 'Formal', 'Party', 'Traditional', 'Summer'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Red', 'Blue', 'Green', 'Black', 'White'];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDresses = dresses.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Scroll to the top of the dress collection (horizontally)
    const container = document.getElementById('dress-collection');
    if (container) {
      container.scrollLeft = container.offsetWidth * (pageNumber - 1);
    }
  };

  const handleSortChange = (sortType) => {
    // Implement sorting logic here based on sortType
    console.log(sortType);
    handleCloseRelevance();
  };

  return (
    <div style={{ backgroundColor: '#EFEBE9', minHeight: '100vh', padding: '20px' }}>
      <h1 className="d-flex justify-content-center">NEW ARRIVALS</h1>
      <Button variant="btn btn-light" onClick={handleShowFilter}>
        FILTER
      </Button>

      <Button variant="secondary" style={{ margin: '20px' }} onClick={handleShowRelevance}>
        RELEVANCE
      </Button>

      {/* Filter Offcanvas */}
      <Offcanvas show={showFilter} onHide={handleCloseFilter}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>FILTER</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>


          <div className="mb-3">
            <h6>Price</h6>
            <InputGroup>
              <Form.Control
                type="range"
                min="0"
                max="15990"
                value={price[0]}
                onChange={handlePriceChange}
              />
            </InputGroup>
            <div className="d-flex justify-content-between">
              <span>₹ {price[0]}</span>
              <span>₹ {price[1]}</span>
            </div>
          </div>
          <div className="mb-3">
            <h6>Product Type</h6>
            <div className="d-flex flex-wrap">
              {productTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedProductTypes.includes(type) ? 'dark' : 'light'}
                  className="m-1"
                  onClick={() => handleProductTypeChange(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <h6>Size</h6>
            <div className="d-flex flex-wrap">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSizes.includes(size) ? 'dark' : 'light'}
                  className="m-1"
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <h6>Color</h6>
            <div className="d-flex flex-wrap">
              {colors.map((color) => (
                <Button
                  key={color}
                  variant="outline-secondary"
                  className={`m-1 ${selectedColors.includes(color) ? 'border-dark' : ''}`}
                  style={{
                    backgroundColor: selectedColors.includes(color) ? color.toLowerCase() : 'transparent',
                    color: selectedColors.includes(color) ? (color.toLowerCase() === 'white' ? 'black' : 'white') : color.toLowerCase(),
                  }}
                  onClick={() => handleColorChange(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <Button variant="secondary" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>





        </Offcanvas.Body>
      </Offcanvas>

      {/* Relevance Offcanvas */}
      <Offcanvas show={showRelevance} onHide={handleCloseRelevance} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>SORT BY</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Dropdown.Item onClick={() => handleSortChange('Popularity')}>Popularity</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange('Price: Low to High')}>Price: Low to High</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange('Price: High to Low')}>Price: High to Low</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange('Newest First')}>Newest First</Dropdown.Item>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Dress Collection */}
      <div id="dress-collection" className="container">
        <Row className="g-4">
          {currentDresses.map((dress, index) => (
            <Col xs={12} sm={6} md={4}  key={dress.id} className="d-flex flex-column align-items-center">
              <a
                href={dress.href}
                className="position-relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={hoveredIndex === index ? dress.hoverImg : dress.defaultImg}
                  alt={dress.title}
                  fluid
                  className="img-fluid thumbail"
                  style={{ width: '100%', height: 'auto', padding: '10px' }}
                />
                {/* Add Wishlist Icon */}
                <span className="position-absolute top-0 end-0 p-2 " style={{ padding: '5px', margin:'10px' }}>
                      <a href="/" className="text-decoration-none "style={{ padding: '5px', margin:'10px' }}>
                        <FaHeart size={30} color="#fff0db" /> 
                      </a>
                      <a href="/" className="text-decoration-none">
                        <IoShareOutline  size={30} color="black" />
                        
                          

                      </a>
                      
                </span>
              </a>
                  <a href={dress.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h6 className="mt-2 text-center">{dress.title}</h6>
                    <p className="text-center">{dress.price}</p>
                  </a>
            </Col>
          ))}
        </Row>
      </div>

      {/* Pagination */}
      <Pagination className="d-flex justify-content-center mt-4">
        {Array.from({ length: Math.ceil(dresses.length / itemsPerPage) }).map((_, idx) => (
          <Pagination.Item
            key={idx + 1}
            active={idx + 1 === currentPage}
            onClick={() => handlePageChange(idx + 1)}
          >
            {idx + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default NewArrivals;