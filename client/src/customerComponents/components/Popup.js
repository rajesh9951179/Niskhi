import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl'; 
import './Popup.css';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  company: Yup.string().required('company is required'),
  address1: Yup.string().required('Address Line 1 is required'),
  address2: Yup.string().required('Address Line 2 is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
  province: Yup.string().required('Province/State is required'),
  postalCode: Yup.string().required('Postal/Zip Code is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
});

function Popup({ show, handleClose }) {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <h2 style={{
          fontFamily:"Centaur"
        }}>Add a New Address</h2>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            company: '',
            address1: '',
            address2: '',
            city: '',
            country: '',
            province: '',
            postalCode: '',
            phoneNumber: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values); 
            handleClose(); 
            resetForm(); 
          }}
        >
          {formik => (
            <Form>
              <FormikControl
                control="input"
                type="text"
                id="firstName"
                name="firstName"
                label="First Name"
                placeholder="Enter first name"
                formik={formik}
              />

              <FormikControl
                control="input"
                type="text"
                id="lastName"
                name="lastName"
                label="Last Name"
                placeholder="Enter last name"
                formik={formik}
              />

              <FormikControl
                control="input"
                type="text"
                id="company"
                name="company"
                label="Company"
                placeholder="Enter company name"
                formik={formik}
              />

              <FormikControl
                control="input"
                type="text"
                id="address1"
                name="address1"
                label="Address 1"
                placeholder="Enter address line 1"
                formik={formik}
              />

              <FormikControl
                control="input"
                type="text"
                id="address2"
                name="address2"
                label="Address 2"
                placeholder="Enter address line 2"
                formik={formik}
              />

              <FormikControl
                control="input"
                type="text"
                id="city"
                name="city"
                label="City"
                placeholder="Enter city"
                formik={formik}
              />

              <FormikControl
                control="input"
                type="text"
                id="country"
                name="country"
                label="Country"
                placeholder="Enter country"
                formik={formik}
              />

              <FormikControl
                control="input"
                type="text"
                id="province"
                name="province"
                label="Province/State"
                placeholder="Enter province or state"
                formik={formik}
              />

              <FormikControl
                control="input"
                type="text"
                id="postalCode"
                name="postalCode"
                label="Postal/Zip Code"
                placeholder="Enter postal or zip code"
                formik={formik}
              />

              <FormikControl
                control="input"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter phone number"
                formik={formik}
              />

              <button type="submit" className="save-btn">
               ADD ADDRESS
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Popup;
