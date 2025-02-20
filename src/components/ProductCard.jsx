import React from 'react'


const ProductCard = ({ name, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img src={image} alt={name} className="w-full h-full object-cover toy-image" />
    </div>
  );
};




export default ProductCard