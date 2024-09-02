import './App.css';
import './components/Styles.css';
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './Pages/Home/HomePage.jsx';
import CartPage from './Pages/CartPage.jsx';
import ErrorPage from "./Pages/error-page.jsx";
import ProductPage from './Pages/ProductPage.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='productDetails/:productId' element={<ProductPage />} />

        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
