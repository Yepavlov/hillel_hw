import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { userSchema } from '../validation/userSchema';

const formFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'username', label: 'User name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'phone', label: 'Phone', type: 'text' },
  { name: 'website', label: 'Website', type: 'text' },
  { name: 'city', label: 'City', type: 'text' },
  { name: 'street', label: 'Street', type: 'text' },
  { name: 'companyName', label: 'Company name', type: 'text' },
];

const UserForm = ({ initialValues, onSubmit, buttonText }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form as={BootstrapForm}>
          {formFields.map((field) => (
            <BootstrapForm.Group className="mb-3" key={field.name}>
              <BootstrapForm.Label>{field.label}</BootstrapForm.Label>

              <Field
                name={field.name}
                type={field.type}
                as={BootstrapForm.Control}
                isInvalid={touched[field.name] && !!errors[field.name]}
              />

              <ErrorMessage
                name={field.name}
                component="div"
                className="text-danger"
              />
            </BootstrapForm.Group>
          ))}

          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {buttonText}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

UserForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default UserForm;
