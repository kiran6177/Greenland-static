import React from 'react';
import img1 from "/Img/image-2.webp";
import img2 from "/Img/image-1.webp";

const AboutPage = () => {
   return (
      <>
         {/* Hero Section */}
         <section className="bg-img1 txt-center p-lr-15 p-tb-92  m-t-84" style={{ backgroundImage: "url('/Img/main-4.jpg')" }}>
            <h2 className="ltext-105 cl0 txt-center text-white">
               About Us
            </h2>
         </section>

         {/* Content Page */}
         <section className="bg0 p-t-75 p-b-120">
            <div className="container">
               <div className="row p-b-148">
                  <div className="col-md-7 col-lg-8">
                     <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                        <h3 className="mtext-111 cl2 p-b-16">
                           Our Story
                        </h3>

                        <p className="stext-113 cl6 p-b-26">
                           Welcome to <strong>Interlock Bricks</strong>, your trusted partner in building dreams. We specialize in providing high-quality interlock bricks that are not only durable but also aesthetically pleasing. Our journey began with a simple mission: to revolutionize the way people build their homes by offering a sustainable, cost-effective, and visually appealing alternative to traditional construction materials.
                        </p>

                        <p className="stext-113 cl6 p-b-26">
                           Over the years, we have grown into a leading provider of interlock bricks, serving homeowners, architects, and builders alike. Our bricks are designed to withstand the test of time, offering superior strength and durability. Whether you're building a new home, renovating an existing one, or working on a commercial project, our interlock bricks are the perfect choice for creating beautiful, long-lasting structures.
                        </p>
                     </div>
                  </div>

                  <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
                     <div className="how-bor1">
                        <div className="hov-img0">
                           <img src={img1} alt="Interlock Bricks in Action" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
                     <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                        <h3 className="mtext-111 cl2 p-b-16">
                           Why Choose Interlock Bricks?
                        </h3>

                        <p className="stext-113 cl6 p-b-26">
                           Interlock bricks are a game-changer in the construction industry. Here are some reasons why they are the ideal choice for your next project:
                        </p>

                        <ul className="stext-113 cl6 p-b-26">
                           <li><strong>Durability:</strong> Our interlock bricks are engineered to withstand extreme weather conditions, ensuring that your structure remains intact for years to come.</li>
                           <li><strong>Aesthetic Appeal:</strong> With a variety of colors, textures, and patterns, our bricks allow you to create stunning designs that enhance the beauty of your home.</li>
                           <li><strong>Eco-Friendly:</strong> Made from natural materials, our bricks are environmentally friendly and contribute to sustainable construction practices.</li>
                           <li><strong>Cost-Effective:</strong> Interlock bricks are easy to install and require minimal maintenance, saving you time and money in the long run.</li>
                           <li><strong>Versatility:</strong> Whether it's driveways, walkways, patios, or walls, our bricks can be used for a wide range of applications.</li>
                        </ul>
                     </div>
                  </div>

                  <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
                     <div className="how-bor2">
                        <div className="hov-img0">
                           <img src={img2} alt="Beautiful Interlock Brick Designs" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutPage;