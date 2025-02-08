import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
   const location = useLocation();
   const product = location.state?.productDetails;

   return (
      <section className="sec-product-detail bg0 p-t-65 p-b-60 m-t-84">
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-lg-7 p-b-30">
                  <div className="p-l-25 p-r-30 p-lr-0-lg">
                     <div className="wrap-slick3 flex-sb flex-w">

                        <div className="slick3 gallery-lb">
                           <div className="item-slick3">
                              <div className="wrap-pic-w pos-relative">
                                 <img src={product?.image} alt="IMG-PRODUCT" style={{ maxHeight: "450px" }} />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-md-6 col-lg-5 p-b-30">
                  <div className="p-r-50 p-t-5 p-lr-0-lg">
                     <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                        {product?.name}
                     </h4>

                     <p className="stext-102 cl3 p-t-23">
                        {product?.description}
                     </p>


                     <ul className="p-t-33">

                        <li className="flex-w flex-t p-b-7">
                           <span className="stext-102 cl3 size-205">
                              Dimensions
                           </span>
                           <span className="stext-102 cl6 size-206">
                              {product?.dimensions}
                           </span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ProductDetail;