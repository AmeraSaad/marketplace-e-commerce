import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import SideBar from './components/SideBar';
import './components/Styles.css'
import RightIcons from './components/RightIcons';

import Slider from './components/Slider';


function App() {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getAllProducts = () => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => setProducts(data.products));
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  useEffect(() => {
    getAllProducts();
  }, []);
  
  return (
    <div className={theme}>
    <NavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
      toggleSidebar={toggleSidebar}
      setSearchQuery={setSearchQuery}
      />
    <Slider products={products.slice(0, 5)} />
    <ProductList products={filteredProducts} setProducts={setProducts}/>
    <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} setProducts={setProducts} getAllProducts={getAllProducts}/>
    <RightIcons theme={theme} toggleTheme={toggleTheme}/>
    </div>
  );
}

export default App;
