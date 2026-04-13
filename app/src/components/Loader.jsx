import { Container, Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loader;
