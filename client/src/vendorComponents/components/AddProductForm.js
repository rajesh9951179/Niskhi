import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import productimage from '../Images/productimage.avif';

const AddProductForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    productDate: '',
    price: '',
    gender: '',
    size: []
  });

  const [errors, setErrors] = useState({});
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false); // State to toggle DatePicker

  const fileInputRef = useRef(null); // Create a ref for the file input

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.productDate) newErrors.productDate = 'Product Date is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.gender) newErrors.gender = 'Please select a gender';
    if (formData.size.length === 0) newErrors.size = 'Please select at least one size';

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleBrowseClick = (event) => {
    event.preventDefault(); 
    if (fileInputRef.current) {
        fileInputRef.current.click(); 
    }
  };

  const handleSizeChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setFormData({ ...formData, size: selectedOptions });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, productDate: date });
    setCurrentDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      console.log('Form is valid', formData);
     
    } else {
      setErrors(formErrors);
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#343a40' : '#E3F2FD',
        color: darkMode ? '#f8f9fa' : '#212529',
        padding: '20px',
        minHeight: '100vh',
       
        fontFamily: 'Poppins',
        margin:'0px'
      }}
    >
      <Row>
        <Col md={8}>
          <h1 className="mb-4">ADD NEW PRODUCT</h1>
          <p>Robotech / Admin / Add Product</p>
        </Col>
        <Col md={4} className="text-right">
          <Button
            variant="outline-primary"
            style={{ width: 'auto' }}
            onClick={toggleDatePicker} 
          >
            Today Date: {currentDate.toLocaleDateString()}
          </Button>
          {showDatePicker && (
            <div style={{ position: 'absolute', zIndex: 1000 }}>
              <DatePicker
                selected={currentDate}
                onChange={(date) => handleDateChange(date)}
                inline
              />
            </div>
          )}
        </Col>
      </Row>
      <hr/>

      <Form onSubmit={handleSubmit}>
        <Row>




          <Col md={3}>
           
            <Col md={10} className="border py-4 text-center me-3" style={{ borderRadius: '10px', borderStyle: 'dashed', color: '#6c757d' }}>
              Drag & Drop your files or <a href="/" onClick={handleBrowseClick} style={{ textDecoration: 'none', color: '#007bff' }}> Browse</a>
              <input
                type="file"
                ref={fileInputRef} // Assign the ref to the file input
                style={{ display: 'none' }} // Hide the file input
              />
              
            </Col>
            
            <Row>
              <Col>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Image</Form.Label>
                  <div className="border p-5 text-center" style={{ borderRadius: '5px' }}>
                    Drag & Drop your files or <a href="/" onClick={handleBrowseClick}>Browse</a>
                  </div>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Image</Form.Label>
                  <div className="border p-5 text-center" style={{ borderRadius: '5px' }}>
                    Drag & Drop your files or <a href="/" onClick={handleBrowseClick}>Browse</a>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Col>






          
          <Col md={5}>
            <Form.Group controlId="title" className="mb-3">
              <Form.Label>Product Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product title"
                value={formData.title}
                onChange={handleInputChange}
                className={darkMode ? 'bg-dark text-light' : 'dark'}
              />
              {errors.title && <Form.Text className="text-danger">{errors.title}</Form.Text>}
            </Form.Group>





          
             <Form.Group controlId="category" className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={formData.category}
                onChange={handleInputChange}
                className={darkMode ? 'bg-dark text-light' : 'dark'}
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Cloths">Cloths</option>
              
              </Form.Control>
              {errors.gender && <Form.Text className="text-danger">{errors.gender}</Form.Text>}
            </Form.Group>





            <Form.Group controlId="description" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                value={formData.description}
                onChange={handleInputChange}
                className={darkMode ? 'bg-dark text-light' : 'dark'}
              />
              {errors.description && <Form.Text className="text-danger">{errors.description}</Form.Text>}
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="productDate" className="mb-3">
                  <Form.Label>Product Date</Form.Label>
                  <DatePicker
                    selected={formData.productDate ? new Date(formData.productDate) : null}
                    onChange={handleDateChange}
                    className={`form-control ${darkMode ? 'bg-dark text-light' : 'dark'}`}
                    dateFormat="yyyy/MM/dd"
                  />
                  {errors.productDate && <Form.Text className="text-danger">{errors.productDate}</Form.Text>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="price" className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control
                      type="number"
                      placeholder="Enter product price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className={darkMode ? 'bg-dark text-light' : 'dark'}
                    />
                  </InputGroup>
                  {errors.price && <Form.Text className="text-danger">{errors.price}</Form.Text>}
                </Form.Group>
              </Col>
            </Row>





            <Form.Group controlId="gender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                value={formData.gender}
                onChange={handleInputChange}
                className={darkMode ? 'bg-dark text-light' : 'dark'}
              >
                <option value="">Select Gender</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Unisex">Unisex</option>
              </Form.Control>
              {errors.gender && <Form.Text className="text-danger">{errors.gender}</Form.Text>}
            </Form.Group>







            <Form.Group controlId="size" className="mb-3">
              <Form.Label>Size</Form.Label>
              <Form.Control
                as="select"
                multiple
                value={formData.size}
                onChange={handleSizeChange}
                className={darkMode ? 'bg-dark text-light' : 'dark'}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>

                
              </Form.Control>
              {errors.size && <Form.Text className="text-danger">{errors.size}</Form.Text>}
            </Form.Group>






            <Row>
                <Col md={4}>
                  <Form.Group controlId="submit">
                    <Button type="submit" variant="primary">
                    Add product
                    </Button>
                  </Form.Group>
                </Col>



                <Col md={4}>
                  <Form.Group controlId="submit">
                    <Button type="submit" variant="info">
                    Save Product
                    </Button>
                  </Form.Group>
                </Col>
          
            </Row>
          </Col>
          <Col>
          <Col md={10} className="d-flex align-items-center">
            <div>
              <img src={productimage} alt="Product" className="img-fluid" />
              <h5 className="mt-3">Product Title</h5>
              <p className="text-muted"> Laptop</p>
              <p>
                <strong>Description</strong>
              </p>
              <p>
              Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey
              </p>
              <p>
                <strong>Pro. Date</strong>
              </p>
              <p>02/05/2023</p>
            </div>
          </Col>
          </Col>
          
        </Row>
      </Form>
    </div>
  );
};

export default AddProductForm;
