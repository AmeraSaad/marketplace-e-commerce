import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

function ProductsProvider({ children }){
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // const getAllProducts = () => {
  //   fetch('https://dummyjson.com/products')
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.products));
  // };
   const getAllProducts = () => {
     fetch("https://fakestoreapi.com/products")
       .then((res) => res.json())
       .then((data) => setProducts(data));
   };

   // Filter products based on search query (by title or category)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getAllProducts();
  }, []);

  return(
    < ProductsContext.Provider value={{products,setProducts,getAllProducts,filteredProducts,setSearchQuery}}>
      { children }
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;