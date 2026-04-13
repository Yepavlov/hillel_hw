import { useCallback, useState } from 'react';
import * as api from '../api/usersApi';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatUserPayload = (values) => ({
    name: values.name,
    username: values.username,
    email: values.email,
    phone: values.phone,
    website: values.website,
    address: {
      city: values.city,
      street: values.street,
    },
    company: {
      name: values.companyName,
    },
  });

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.fetchUsers();
      setUsers(res);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getUser = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      const user = await api.fetchUserById(id);
      setData(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addUser = async (userData) => {
    try {
      setLoading(true);
      const payload = formatUserPayload(userData);
      return await api.createUser(payload);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id, userData) => {
    try {
      setLoading(true);
      const payload = formatUserPayload(userData);
      return await api.updateUser(id, payload);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const removeUser = async (id) => {
    try {
      await api.deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    users,
    data,
    loading,
    error,
    getUsers,
    getUser,
    addUser,
    updateUser,
    removeUser,
  };
};

export default useUsers;
