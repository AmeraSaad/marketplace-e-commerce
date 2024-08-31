import { useContext, useState } from 'react';
import NavBar from '../../components/navBar/NavBar';
import ProductList from './compnenets/ProductList';
import SideBar from './compnenets/SideBar';
import RightIcons from '../../components/RightIcons';
import Slider from './compnenets/Slider';
import ProductsProvider from '../../context/ProductsContext';
import { ThemeContext } from '../../context/ThemeContext';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ProductsProvider>
      <div className={theme}>
        <NavBar 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Slider />
        <ProductList />
        <SideBar 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />
        <RightIcons theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ProductsProvider>
  );
};

export default Home;
