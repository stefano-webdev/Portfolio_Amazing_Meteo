import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/style.css';
import './styles/styleCarrello.css';
import './styles/styleResponsive.css';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import Carrello from './pages/Carrello.jsx';
import Form from "./pages/Form.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/cart', element: <Carrello /> },
        { path: '/form', element: <Form /> }
      ]
    },
    { path: '*', element: <NotFound /> }
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
