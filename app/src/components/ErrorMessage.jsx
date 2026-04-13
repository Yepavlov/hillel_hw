import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <Alert variant="danger" className="mt-3">
      {message}
    </Alert>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
