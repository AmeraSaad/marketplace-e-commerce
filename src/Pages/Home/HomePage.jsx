import { useContext } from 'react';
import ProductList from './compnenets/ProductList';
import SideBar from './compnenets/SideBar';

import Slider from './compnenets/Slider';
import { ThemeContext } from '../../context/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext); 
  
  return (
      <main className={`${theme} main-content`}>
        {/* <Slider /> */}
        <ProductList />
        <SideBar />
      </main>
  );
};

export default Home;
