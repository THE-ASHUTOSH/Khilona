import React from 'react'
import toy1 from '../assets/toy1.png'
import toy2 from '../assets/toy2.png'
import toy3 from '../assets/toy3.png'
import ProductCard from './ProductCard';
const ProductsGrid = () => {
    const products = [
      {
        name: "Hoppy",
        description: "A cute blue bunny with pink accents and adorable eyes.",
        image: toy1
      },
      {
        name: "Grok",
        description: "Gabbo's spirited rocket. With boundless energy, ready to soar among the stars!",
        image: toy2
      },
      {
        name: "Beep",
        description: "A friendly blue robot with gaming controls and a cheerful smile.",
        image: toy3
      }
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    );
  };

export default ProductsGrid