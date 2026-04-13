import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';
import { Container } from 'react-bootstrap';
import UserForm from '../components/UserForm';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, loading, error, getUser, updateUser } = useUsers();

  useEffect(() => {
    getUser(id);
  }, [id, getUser]);

  const handleSubmit = async (values) => {
    try {
      await updateUser(id, values);
      alert('User updated successfully.');
      navigate('/users');
    } catch (e) {
      console.log(e);
    }
  };

  if (loading && !user) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const initialValues = user
    ? {
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        city: user.address?.city || '',
        street: user.address?.street || '',
        companyName: user.company?.name || '',
      }
    : null;

  return (
    <Container className="mt-4">
      <h3>Update user</h3>
      {initialValues && (
        <UserForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          buttonText="Save changes"
        />
      )}
    </Container>
  );
};

export default EditUserPage;
