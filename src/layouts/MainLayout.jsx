import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import ThemeProvider from '../context/ThemeContext';
import ToggleSidebarProvider from '../context/ToggleSidebarContext';
import ProductsProvider from '../context/ProductsContext';
import RightIcons from '../components/RightIcons';

const MainLayout = () => {
  return (
    <ThemeProvider>
      <ToggleSidebarProvider>
        <ProductsProvider>
          <NavBar />
          <Outlet />
          <RightIcons/>
        </ProductsProvider>
      </ToggleSidebarProvider>
    </ThemeProvider>
  );
}

export default MainLayout;
