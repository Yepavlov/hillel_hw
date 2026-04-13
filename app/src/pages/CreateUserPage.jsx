import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import UserForm from '../components/UserForm';
import { useUsers } from '../hooks/useUsers';
import ErrorMessage from '../components/ErrorMessage';

const CreateUserPage = () => {
  const navigate = useNavigate();
  const { addUser, loading, error } = useUsers();

  const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    city: '',
    street: '',
    companyName: '',
  };

  const handleSubmit = async (values) => {
    try {
      await addUser(values);
      alert('User successfully created!');
      navigate('/users');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container className="mt-4">
      <h3>Create new user</h3>
      <ErrorMessage message={error} />
      <UserForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        buttonText={loading ? 'Saving...' : 'Create'}
      />
    </Container>
  );
};

export default CreateUserPage;
