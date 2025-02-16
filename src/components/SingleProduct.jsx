import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleProduct = ({ product }) => {
   const navigate = useNavigate();
   return (
      <div
         key={product?.id}
         className={`col-sm-6 col-md-4 col-lg-4 p-b-35 isotope-item ${product?.category}`}
         onClick={() => navigate("/product-details", { state: { "productDetails": product } })}
      >
         <div className="block2">
            <div
               className="block2-pic hov-img0"
               style={{ backgroundColor: "#80808014", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
               <img src={product?.image} width={"70%"} alt="IMG-PRODUCT" />
               <a
                  className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-bg1 p-lr-15 trans-04 js-show-modal1"
               >
                  Quick View
               </a>
            </div>

            <div className="block2-txt flex-w flex-t p-t-14">
               <div className="block2-txt-child1 flex-col-l">
                  <a
                     className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                  >
                     {product?.name}
                  </a>
               </div>

            </div>
         </div>
      </div>
   )
}

export default SingleProduct