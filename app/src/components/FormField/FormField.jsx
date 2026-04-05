import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useField } from 'formik';

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const isInvalid = meta.touched && meta.error;

  return (
    <Form.Group className="mb-3" controlId={props.name}>
      {props.type !== 'checkbox' && <Form.Label>{label}</Form.Label>}

      {props.type === 'select' ? (
        <Form.Select {...field} {...props} isInvalid={isInvalid}>
          <option value="">Select...</option>
          {props.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Form.Select>
      ) : props.type === 'checkbox' ? (
        <Form.Check
          type="checkbox"
          label={label}
          {...field}
          {...props}
          checked={field.value}
          isInvalid={isInvalid}
        />
      ) : (
        <Form.Control {...field} {...props} isInvalid={isInvalid} />
      )}

      <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
    </Form.Group>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
