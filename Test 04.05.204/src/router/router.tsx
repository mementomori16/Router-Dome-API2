import App from "../App";
import { createBrowserRouter } from 'react-router-dom';
import ItemPage from '../components/Pages/ItemPage/ItemPage';

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  }, 
  {
    path: '/product/:productId',
    element: <ItemPage />,
  },
  
]);

export default router;