// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import registerImage from '../Images/bank-registration.jpg';

// export default function Registration() {
//   const [validated, setValidated] = useState(false);
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordsMatch, setPasswordsMatch] = useState(true);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     // Validate form fields without specific password length or file type checks
//     if (form.checkValidity() === false || password !== confirmPassword) {
//       event.stopPropagation();
//       setPasswordsMatch(password === confirmPassword);
//     } else {
//       navigate('/company-register');
//     }

//     setValidated(true);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//     setPasswordsMatch(event.target.value === password);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (file.type.startsWith('image/')) { // Check if the file is an image
//         setSelectedFile(file);
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setPreview(reader.result);
//         };
//         reader.readAsDataURL(file);
//       } else {
//         alert('Please upload an image file.');
//         setSelectedFile(null);
//         setPreview(null);
//       }
//     } else {
//       setSelectedFile(null);
//       setPreview(null);
//     }
//   };

//   const headingStyle = {
//     marginBottom: '30px',
//     backgroundColor: '#0d4523',
//     padding: '10px',
//     borderRadius: '10px',
//     color: 'white',
//     textAlign: 'center',
//   };

//   return (
//     <div className="container-fluid p-0" style={{ backgroundColor: '#b7e2c8', minHeight: '100vh' }}>
//       <Row className="justify-content-center align-items-center m-0 h-100">
//         <Col md={6} className="text-center p-0">
//           <img
//             src={registerImage}
//             alt="image"
//             width="400"
//             height="500"
//             className="d-inline-block align-top"
//           />
//         </Col>

//         <Col md={6} className="p-4">
//           <h1 className='mb-4' style={headingStyle}>Registration</h1>

//           <Form noValidate validated={validated} onSubmit={handleSubmit}>
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridFirstName">
//                 <Form.Label><strong>First Name</strong></Form.Label>
//                 <Form.Control required type="text" placeholder="First name" />
//                 <Form.Control.Feedback type="invalid">
//                   Please provide your first name.
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridLastName">
//                 <Form.Label><strong>Last Name</strong></Form.Label>
//                 <Form.Control required type="text" placeholder="Last name" />
//                 <Form.Control.Feedback type="invalid">
//                   Please provide your last name.
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Row>

//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridPhoneNumber">
//                 <Form.Label><strong>Phone Number</strong></Form.Label>
//                 <Form.Control 
//                   required 
//                   type="tel" 
//                   placeholder="Phone number" 
//                   pattern="\d{10}" 
//                   title="Phone number must be exactly 10 digits"
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please provide a valid 10-digit phone number.
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridDOB">
//                 <Form.Label><strong>Date of Birth</strong></Form.Label>
//                 <Form.Control
//                   required
//                   type="date"
//                   placeholder="DD-MM-YYYY"
//                   min="1900-01-01"
//                   max={new Date().toISOString().split("T")[0]}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please provide your date of birth.
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Row>

//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridAadhar">
//                 <Form.Label><strong>Aadhar Card</strong></Form.Label>
//                 <Form.Control 
//                   required 
//                   type="text" 
//                   placeholder="Enter Aadhar number" 
//                   pattern="\d{12}" 
//                   title="Aadhar number must be exactly 12 digits"
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please provide a valid 12-digit Aadhar number.
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridPan">
//                 <Form.Label><strong>Pan Card</strong></Form.Label>
//                 <Form.Control 
//                   required 
//                   type="text" 
//                   placeholder="Enter PAN details" 
//                   pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" 
//                   title="PAN must be exactly 10 characters with 5 uppercase letters followed by 4 digits and 1 uppercase letter"
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please provide valid PAN details (e.g., ABCDE1234F).
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Row>

//             <Form.Group className="mb-3" controlId="formGridAddress">
//               <Form.Label><strong>Address</strong></Form.Label>
//               <Form.Control required placeholder="1234 Main St" />
//               <Form.Control.Feedback type="invalid">
//                 Please provide your address.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridCity">
//                 <Form.Label><strong>City</strong></Form.Label>
//                 <Form.Control required />
//                 <Form.Control.Feedback type="invalid">
//                   Please provide your city.
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridState">
//                 <Form.Label><strong>State</strong></Form.Label>
//                 <Form.Select required>
//                   <option value="">Choose...</option>
//                   <option>Andhra Pradesh</option>
//                   <option>Arunachal Pradesh</option>
//                   <option>Assam</option>
//                   <option>Bihar</option>
//                   <option>Chhattisgarh</option>
//                   <option>Goa</option>
//                   <option>Gujarat</option>
//                   <option>Haryana</option>
//                   <option>Himachal Pradesh</option>
//                   <option>Jharkhand</option>
//                   <option>Karnataka</option>
//                   <option>Kerala</option>
//                   <option>Madhya Pradesh</option>
//                   <option>Maharashtra</option>
//                   <option>Manipur</option>
//                   <option>Meghalaya</option>
//                   <option>Mizoram</option>
//                   <option>Nagaland</option>
//                   <option>Odisha</option>
//                   <option>Punjab</option>
//                   <option>Rajasthan</option>
//                   <option>Sikkim</option>
//                   <option>Tamil Nadu</option>
//                   <option>Telangana</option>
//                   <option>Tripura</option>
//                   <option>Uttar Pradesh</option>
//                   <option>Uttarakhand</option>
//                   <option>West Bengal</option>
//                   <option>Andaman and Nicobar Islands</option>
//                   <option>Chandigarh</option>
//                   <option>Dadra and Nagar Haveli and Daman and Diu</option>
//                   <option>Delhi</option>
//                   <option>Lakshadweep</option>
//                   <option>Puducherry</option>
//                   <option>Ladakh</option>
//                   <option>Jammu and Kashmir</option>
//                 </Form.Select>
//                 <Form.Control.Feedback type="invalid">
//                   Please select your state.
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridZip">
//                 <Form.Label><strong>Pincode</strong></Form.Label>
//                 <Form.Control 
//                   required 
//                   type="text" 
//                   placeholder="Enter Pincode" 
//                   pattern="\d{6}" 
//                   title="Pincode must be exactly 6 digits"
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please provide a valid 6-digit Pincode.
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Row>

//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridEmail">
//                 <Form.Label><strong>Email</strong></Form.Label>
//                 <Form.Control required type="email" placeholder="Enter email" />
//                 <Form.Control.Feedback type="invalid">
//                   Please provide a valid email address.
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridPassword">
//                 <Form.Label><strong>Password</strong></Form.Label>
//                 <Form.Control
//                   required
//                   type="password"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   isInvalid={!passwordsMatch}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Passwords must match.
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridConfirmPassword">
//                 <Form.Label><strong>Confirm Password</strong></Form.Label>
//                 <Form.Control
//                   required
//                   type="password"
//                   placeholder="Confirm password"
//                   value={confirmPassword}
//                   onChange={handleConfirmPasswordChange}
//                   isInvalid={!passwordsMatch}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Passwords must match.
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Row>

//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridUpload">
//                 <Form.Label><strong>Upload Photo</strong></Form.Label>
//                 <Form.Control
//                   required
//                   type="file"
//                   accept="image/*" // Only accept image files
//                   onChange={handleFileChange}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please upload a photo.
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Row>

//             {preview && (
//               <Row className="mb-3">
//                 <Col className="text-left">
//                   <img
//                     src={preview}
//                     alt="Preview"
//                     style={{ maxWidth: '25%', height: 'auto' }}
//                   />
//                 </Col>
//               </Row>
//             )}

//             <Button variant="success" type="submit" className="mt-3">
//               Save and Next
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerImage from '../Images/bank-registration.jpg';

export default function Registration() {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Validate form fields without specific password length or file type checks
    if (form.checkValidity() === false || password !== confirmPassword) {
      event.stopPropagation();
      setPasswordsMatch(password === confirmPassword);
    } else {
      navigate('/dashboard'); // Redirect to the Dashboard page
    }

    setValidated(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) { // Check if the file is an image
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please upload an image file.');
        setSelectedFile(null);
        setPreview(null);
      }
    } else {
      setSelectedFile(null);
      setPreview(null);
    }
  };

  const headingStyle = {
    marginBottom: '30px',
    backgroundColor: '#0d4523',
    padding: '10px',
    borderRadius: '10px',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#b7e2c8', minHeight: '100vh' }}>
      <Row className="justify-content-center align-items-center m-0 h-100">
        <Col md={6} className="text-center p-0">
          <img
            src={registerImage}
            alt="image"
            width="400"
            height="500"
            className="d-inline-block align-top"
          />
        </Col>

        <Col md={6} className="p-4">
          <h1 className='mb-4' style={headingStyle}>Registration</h1>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label><strong>First Name</strong></Form.Label>
                <Form.Control required type="text" placeholder="First name" />
                <Form.Control.Feedback type="invalid">
                  Please provide your first name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label><strong>Last Name</strong></Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback type="invalid">
                  Please provide your last name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Label><strong>Phone Number</strong></Form.Label>
                <Form.Control 
                  required 
                  type="tel" 
                  placeholder="Phone number" 
                  pattern="\d{10}" 
                  title="Phone number must be exactly 10 digits"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid 10-digit phone number.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDOB">
                <Form.Label><strong>Date of Birth</strong></Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="DD-MM-YYYY"
                  min="1900-01-01"
                  max={new Date().toISOString().split("T")[0]}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your date of birth.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAadhar">
                <Form.Label><strong>Aadhar Card</strong></Form.Label>
                <Form.Control 
                  required 
                  type="text" 
                  placeholder="Enter Aadhar number" 
                  pattern="\d{12}" 
                  title="Aadhar number must be exactly 12 digits"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid 12-digit Aadhar number.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPan">
                <Form.Label><strong>Pan Card</strong></Form.Label>
                <Form.Control 
                  required 
                  type="text" 
                  placeholder="Enter PAN details" 
                  pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" 
                  title="PAN must be exactly 10 characters with 5 uppercase letters followed by 4 digits and 1 uppercase letter"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide valid PAN details (e.g., ABCDE1234F).
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label><strong>Address</strong></Form.Label>
              <Form.Control required placeholder="1234 Main St" />
              <Form.Control.Feedback type="invalid">
                Please provide your address.
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label><strong>City</strong></Form.Label>
                <Form.Control required />
                <Form.Control.Feedback type="invalid">
                  Please provide your city.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label><strong>State</strong></Form.Label>
                <Form.Select required>
                  <option value="">Choose...</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                  <option>Andaman and Nicobar Islands</option>
                  <option>Chandigarh</option>
                  <option>Dadra and Nagar Haveli and Daman and Diu</option>
                  <option>Delhi</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                  <option>Ladakh</option>
                  <option>Jammu and Kashmir</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select your state.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label><strong>Pincode</strong></Form.Label>
                <Form.Control 
                  required 
                  type="text" 
                  placeholder="Enter Pincode" 
                  pattern="\d{6}" 
                  title="Pincode must be exactly 6 digits"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid 6-digit Pincode.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label><strong>Email</strong></Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label><strong>Password</strong></Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                  isInvalid={!passwordsMatch}
                />
                <Form.Control.Feedback type="invalid">
                  Passwords must match.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridConfirmPassword">
                <Form.Label><strong>Confirm Password</strong></Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  isInvalid={!passwordsMatch}
                />
                <Form.Control.Feedback type="invalid">
                  Passwords must match.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridUpload">
                <Form.Label><strong>Upload Photo</strong></Form.Label>
                <Form.Control
                  required
                  type="file"
                  accept="image/*" // Only accept image files
                  onChange={handleFileChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please upload a photo.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            {preview && (
              <Row className="mb-3">
                <Col className="text-left">
                  <img
                    src={preview}
                    alt="Preview"
                    style={{ maxWidth: '25%', height: 'auto' }}
                  />
                </Col>
              </Row>
            )}

            <Button variant="success" type="submit" className="mt-3">
              Save and Next
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
