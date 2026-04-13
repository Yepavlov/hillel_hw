import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
