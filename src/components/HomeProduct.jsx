import React from 'react';
import SingleProduct from './SingleProduct';

const ProductOverview = () => {

   const products = [
      {
         id: 1,
         name: 'Ribble Stone',
         price: 16.64,
         image: '/Img/product/pro-1.png',
         description: "Ribble Stone interlock bricks are made from high-quality concrete, offering durability and a sleek finish. Perfect for driveways and walkways. Dimensions: 114 * 114 * 60mm.",
         dimensions: "114 * 114 * 60mm"
      },
      {
         id: 2,
         name: 'Glen Stone',
         price: 35.31,
         image: '/Img/product/pro-2.png',
         description: "Glen Stone interlock bricks are crafted from premium materials, ensuring strength and longevity. Ideal for patios and garden paths. Dimensions: 200 * 100 * 60mm.",
         dimensions: "200 * 100 * 60mm"
      },
      {
         id: 3,
         name: 'Line Stone',
         price: 25.50,
         image: '/Img/product/pro-3.png',
         description: "Line Stone interlock bricks are designed for aesthetic appeal and durability. Made from reinforced concrete, suitable for outdoor spaces. Dimensions: 150 * 150 * 60mm.",
         dimensions: "150 * 150 * 60mm"
      },
      {
         id: 4,
         name: 'Swale Stone',
         price: 75.00,
         image: '/Img/product/pro-4.png',
         description: "Swale Stone interlock bricks are made from weather-resistant concrete, perfect for all climates. Great for landscaping projects. Dimensions: 120 * 120 * 60mm.",
         dimensions: "120 * 120 * 60mm"
      },
   ];

   return (
      <section className="bg0 p-t-23 p-b-130">
         <div className="container">
            <div className="p-b-10">
               <h3 className="ltext-103 cl5 mt-5 mb-5">Product Overview</h3>
            </div>

            <div className="row isotope-grid">
               {products.map((product) => (
                  <SingleProduct product={product} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default ProductOverview;