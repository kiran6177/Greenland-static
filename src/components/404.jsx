import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "/Img/banner-1.webp"

const NotFoundPage = () => {
   const navigate = useNavigate();
   return (
      <>
         <section className="bg-img1 txt-center p-lr-15 p-tb-92 m-t-84" style={{ backgroundImage: "url('/Img/main-4.jpg')" }}>
            <h2 className="ltext-105 cl0 txt-center text-white">
               404 - Page Not Found
            </h2>
         </section>

         <section className="bg0 p-t-75">
            <div className="container">
               <div className="row p-b-148">
                  <div className="col-md-7 col-lg-8">
                     <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                        <h3 className="mtext-111 cl2 p-b-16">
                           Oops! Looks like you're lost.
                        </h3>

                        <p className="stext-113 cl6 p-b-26">
                           The page you're looking for doesn't exist or has been moved. Don't worry, you can always go back to the homepage or explore our other pages.
                        </p>

                        <p className="stext-113 cl6 p-b-26">
                           If you think this is a mistake, please contact us and let us know. We'll be happy to help!
                        </p>

                        <a onClick={() => navigate("/")} className="flex-c-m stext-101 cl0 size-121 bg1 bor1 hov-btn1 p-lr-15 trans-04 text-white">
                           Go Back to Home
                        </a>
                     </div>
                  </div>

                  <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
                     <div className="how-bor1">
                        <div className="hov-img0">
                           <img src={img} alt="404 Illustration" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default NotFoundPage;