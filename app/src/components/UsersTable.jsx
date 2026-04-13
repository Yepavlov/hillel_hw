import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UsersTable = ({ users, onDelete }) => {
  if (users.length === 0) {
    return <p className="text-center mt-4">No users found.</p>;
  }

  return (
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="align-middle">{user.name}</td>
            <td className="align-middle">{user.email}</td>
            <td className="align-middle">{user.phone}</td>
            <td>
              <Link
                to={`/users/${user.id}`}
                className="btn btn-info btn-sm me-2"
              >
                View
              </Link>
              <Link
                to={`/users/${user.id}/edit`}
                className="btn btn-warning btn-sm me-2"
              >
                Edit
              </Link>
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UsersTable;
