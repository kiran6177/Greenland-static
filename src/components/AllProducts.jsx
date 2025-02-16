import React, { useState } from 'react';
import SingleProduct from './SingleProduct';

const products = [
   {
      id: 1,
      name: 'Cobil Stone',
      price: 16.64,
      image: '/Img/product/pro-1.png',
      description: "Ribble Stone interlock bricks are made from high-quality concrete, offering durability and a sleek finish. Perfect for driveways and walkways. Dimensions: 114 * 114 * 60mm.",
      dimensions: "114 * 114 * 60mm"
   },
   {
      id: 2,
      name: 'Zig Zag',
      price: 35.31,
      image: '/Img/product/pro-2.png',
      description: "Glen Stone interlock bricks are crafted from premium materials, ensuring strength and longevity. Ideal for patios and garden paths. Dimensions: 200 * 100 * 60mm.",
      dimensions: "200 * 100 * 60mm"
   },
   {
      id: 3,
      name: 'Grass Paver',
      price: 25.50,
      image: '/Img/product/pro-3.png',
      description: "Line Stone interlock bricks are designed for aesthetic appeal and durability. Made from reinforced concrete, suitable for outdoor spaces. Dimensions: 150 * 150 * 60mm.",
      dimensions: "150 * 150 * 60mm"
   },
   {
      id: 4,
      name: 'Line Stone',
      price: 75.00,
      image: '/Img/product/pro-4.png',
      description: "Swale Stone interlock bricks are made from weather-resistant concrete, perfect for all climates. Great for landscaping projects. Dimensions: 120 * 120 * 60mm.",
      dimensions: "120 * 120 * 60mm"
   },
   {
      id: 5,
      name: 'Brick Stone',
      price: 75.00,
      image: '/Img/product/pro-5.png',
      description: "Swale Stone interlock bricks are made from weather-resistant concrete, perfect for all climates. Great for landscaping projects. Dimensions: 120 * 120 * 60mm.",
      dimensions: "120 * 120 * 60mm"
   },
   {
      id: 4,
      name: 'Alpha',
      price: 75.00,
      image: '/Img/product/pro-6.png',
      description: "Swale Stone interlock bricks are made from weather-resistant concrete, perfect for all climates. Great for landscaping projects. Dimensions: 120 * 120 * 60mm.",
      dimensions: "120 * 120 * 60mm"
   },
];

const ProductPage = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [showSearch, setShowSearch] = useState(false);

   const filteredProducts = products
      .filter((product) => {
         const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
         return matchesSearch;
      });

   return (
      <div className="bg0 m-t-100 p-b-140">
         <div className="container">
            <div className="flex-w flex-sb-m p-b-52">
               <h3 className="ltext-103 cl5 mt-5 mb-5">All Products</h3>
               <div className="flex-w flex-c-m m-tb-10">
                  <div
                     className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search"
                     onClick={() => setShowSearch(!showSearch)}
                  >
                     <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                     <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                     Search
                  </div>
               </div>

               <div className={`panel-search w-full p-t-10 p-b-15 ${showSearch ? '' : 'dis-none'}`}>
                  <div className="bor8 dis-flex p-l-15">
                     <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                        <i className="zmdi zmdi-search"></i>
                     </button>
                     <input
                        className="mtext-107 cl2 size-114 plh2 p-r-15"
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </div>
               </div>
            </div>

            <div className="row isotope-grid">
               {filteredProducts.map((product) => (
                  <SingleProduct product={product} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProductPage;