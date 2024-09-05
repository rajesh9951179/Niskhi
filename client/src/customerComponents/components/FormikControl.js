import React from 'react';
import { Field, ErrorMessage } from 'formik';
import clsx from 'clsx';

const styles = {
  formGroup: {
    position: 'relative',
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
   fontSize:"1.25rem",
    fontFamily: "Centaur"
  },
  inputWrapper: {
    position: 'relative',
  },
  formInput: {
    width: '100%',
    padding: '8px 30px 8px 8px', 
    boxSizing: 'border-box',
    borderRadius: '4px',
    
    fontSize:"1.25rem",
    fontFamily: "Centaur",
    backgroundColor:"#f5f5f5",
    border:"none"
  },
  formInputValid: {
    borderColor: 'green',
  },
  formInputInvalid: {
    borderColor: 'red',
  },
  validationIcon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '18px',
  },
  error: {
    color: 'red',
    fontSize: '0.875rem',
  },
};

const FormikControl = ({ control, ...props }) => {
  return (
    <div style={styles.formGroup}>
      <label  htmlFor={props.id || props.name} style={styles.label}>
        {props.label}
      </label>
      <div style={styles.inputWrapper}>
        <Field
          {...props}
          style={{
            ...styles.formInput,
            ...(props.formik.touched[props.name] && !props.formik.errors[props.name]
              ? styles.formInputValid
              : props.formik.touched[props.name] && props.formik.errors[props.name]
              ? styles.formInputInvalid
              : {}),
          }}
        />
        {props.formik.touched[props.name] && !props.formik.errors[props.name] && (
          <span style={{ ...styles.validationIcon, color: 'green' }}>&#10004;</span> 
        )}
        {props.formik.touched[props.name] && props.formik.errors[props.name] && (
          <span style={{ ...styles.validationIcon, color: 'red' }}>&#10008;</span> 
        )}
        <ErrorMessage name={props.name} component="div" style={styles.error} />
      </div>
    </div>
  );
};

export default FormikControl;
