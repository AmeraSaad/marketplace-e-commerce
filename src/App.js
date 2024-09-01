import './App.css';
import './components/Styles.css';
import HomePage from './Pages/Home/HomePage.jsx';
import MainLayout from './layouts/MainLayout.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
