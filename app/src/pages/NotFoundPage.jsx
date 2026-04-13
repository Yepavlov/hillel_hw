import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container className="mt-5 text-center">
      <h1 className="display-1 text-danger">404</h1>
      <h2>Page not found</h2>
      <p className="lead">It looks like you clicked on a broken link.</p>
      <Button as={Link} to="/users" variant="primary">
        Back to the list
      </Button>
    </Container>
  );
};

export default NotFoundPage;
