import React from 'react'


const ProductDetail = ({ product }) => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${product.flip ? "md:flex md:flex-row-reverse" : "md:flex"}`}>
          
          <div className="relative">
            <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg product-image" />
          </div>
          <div className="flex flex-col justify-center ">
            <h1 className="text-4xl font-bold text-gray-100">{product.name}</h1>
            <p className="mt-4 text-lg text-gray-300" >{product.description}</p>
            <button className="mt-8 bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition duration-300 max-w-xs">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
  };

export default ProductDetail