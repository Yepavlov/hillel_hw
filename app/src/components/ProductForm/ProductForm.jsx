import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { Button, Col, Row } from 'react-bootstrap';
import FormField from '../FormField/FormField';
import { initialValues, productFormFields } from '../../utils/formConfig';
import { productValidationSchema } from '../../utils/validationSchema';

const ProductForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={productValidationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values, id: Date.now().toString() });
        resetForm();
      }}
    >
      {({ handleReset }) => (
        <Form className="product-form p-4 border rounded shadow-sm bg-white">
          <h4 className="mb-4">Create New Product</h4>
          <Row>
            {productFormFields.map((field) => (
              <Col md={field.type === 'checkbox' ? 12 : 6} key={field.name}>
                <FormField {...field} />
              </Col>
            ))}
          </Row>
          <div className="d-flex gap-2 mt-3">
            <Button variant="primary" type="submit">
              Save Product
            </Button>
            <Button
              variant="outline-secondary"
              type="button"
              onClick={handleReset}
            >
              Clear
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;
