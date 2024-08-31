import React from 'react';

function ProductSorting({ setSortOption }) {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="mx-auto text-center dark:bg-gray-800 pt-16">
      <label htmlFor="sort" className="mr-6 text-lg dark:text-white">Sort by:</label>
      <select id="sort" onChange={handleSortChange} className="py-1 pr-16 pl-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-white">
        <option value="">Select</option>
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default ProductSorting;
