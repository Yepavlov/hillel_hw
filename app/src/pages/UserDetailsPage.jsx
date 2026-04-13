import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import { useUsers } from '../hooks/useUsers';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const UserDetailsPage = () => {
  const { id } = useParams();
  const { data: user, loading, error, getUser } = useUsers();

  useEffect(() => {
    getUser(id);
  }, [id, getUser]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!user) return null;

  return (
    <Container className="mt-4">
      <div className="mb-3">
        <Button as={Link} to="/users" variant="secondary">
          &larr; Back to List
        </Button>
      </div>

      <Card>
        <Card.Header as="h4">{user.name}</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Username:</strong> {user.username}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Email:</strong> {user.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Phone:</strong> {user.phone}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Website:</strong> {user.website}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Company:</strong> {user.company?.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Address:</strong> {user.address?.city},{' '}
              {user.address?.street}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-muted text-end">
          <Button as={Link} to={`/users/${user.id}/edit`} variant="warning">
            Edit User
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default UserDetailsPage;
