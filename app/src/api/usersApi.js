const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
  const errorMessage = 'Error loading users';
  return await sendRequest(BASE_URL, errorMessage);
};

export const fetchUserById = async (id) => {
  const url = `${BASE_URL}/${id}`;
  const errorMessage = 'User not found';
  return await sendRequest(url, errorMessage);
};

export const createUser = async (userData) => {
  const payload = payloadFactory('POST', userData);
  const errorMessage = 'User creation error';
  return await sendRequest(BASE_URL, errorMessage, payload);
};

export const updateUser = async (id, userData) => {
  const url = `${BASE_URL}/${id}`;
  const payload = payloadFactory('PUT', userData);
  const errorMessage = 'User update error';
  return await sendRequest(url, errorMessage, payload);
};

export const deleteUser = async (id) => {
  const payload = { method: 'DELETE' };
  const errorMessage = 'User deletion error';
  const url = `${BASE_URL}/${id}`;
  await sendRequest(url, errorMessage, payload);
  return true;
};

const sendRequest = async (url, errorMessage = '', payload = null) => {
  const response = await fetch(url, payload);
  if (!response.ok) throw new Error(errorMessage);
  return response.json();
};

const payloadFactory = (method, userData) => {
  return {
    method,
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  };
};
