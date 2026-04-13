import { Navigate, Route, Routes } from 'react-router-dom';
import UsersListPage from '../pages/UsersListPage';
import CreateUserPage from '../pages/CreateUserPage';
import EditUserPage from '../pages/EditUserPage';
import NotFoundPage from '../pages/NotFoundPage';
import UserDetailsPage from '../pages/UserDetailsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace />} />

      <Route path="/users" element={<UsersListPage />} />
      <Route path="/users/create" element={<CreateUserPage />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="/users/:id/edit" element={<EditUserPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
