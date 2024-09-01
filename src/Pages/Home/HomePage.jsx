import { useContext } from 'react';
import ProductList from './compnenets/ProductList';
import SideBar from './compnenets/SideBar';
import RightIcons from '../../components/RightIcons';
import Slider from './compnenets/Slider';
import { ThemeContext } from '../../context/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext); 
  
  return (
      <main className={theme}>
        <Slider />
        <ProductList />
        <SideBar />
        <RightIcons />
      </main>
  );
};

export default Home;
