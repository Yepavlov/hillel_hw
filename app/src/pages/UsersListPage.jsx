import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import UsersTable from '../components/UsersTable';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import useUsers from '../hooks/useUsers.js';

const UsersListPage = () => {
  const { users, loading, error, getUsers, removeUser } = useUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await removeUser(id);
        alert('User successfully deleted');
      } catch (err) {
        console.error(err);
        alert('Error during deletion');
      }
    }
  };

  if (loading) return <Loader />;

  return (
    <Container className="mt-4">
      <ErrorMessage message={error} />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>List of users</h2>
        <Link to="/users/create" className="btn btn-success">
          Create New User
        </Link>
      </div>

      <UsersTable users={users} onDelete={handleDelete} />
    </Container>
  );
};

export default UsersListPage;
