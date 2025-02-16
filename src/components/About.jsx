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
  <h3 className="mtext-111 cl2 p-b-16">Our Story</h3>

  <p className="stext-113 cl6 p-b-26">
    At <strong>Greenland</strong>, we take pride in transforming outdoor spaces with expert paving and landscaping solutions. With years of experience in the industry, our team is dedicated to delivering high-quality craftsmanship, innovative designs, and durable materials to enhance the beauty and functionality of your property.
  </p>

  <p className="stext-113 cl6 p-b-26">
    Whether it’s a new driveway, patio, walkway, or a complete landscape overhaul, we work closely with our clients to bring their vision to life. Our commitment to excellence, attention to detail, and customer satisfaction set us apart. We believe that every project—big or small—deserves the highest level of professionalism and care.
  </p>

  <p className="stext-113 cl6 p-b-26">
    From residential gardens to commercial spaces, we provide customized solutions that suit your style, needs, and budget. Trust <strong>Greenland</strong> to create stunning outdoor spaces that stand the test of time.
  </p>

  <h4 className="mtext-111 cl2 p-b-16">Why Choose Us?</h4>
  <ul className="stext-113 cl6 p-b-26">
    <li>✅ Experienced & Skilled Team</li>
    <li>✅ High-Quality Materials & Workmanship</li>
    <li>✅ Personalized Designs & Solutions</li>
    <li>✅ Reliable & Timely Project Completion</li>
  </ul>

  <p className="stext-113 cl6 p-b-26">
    Let’s build something beautiful together! <strong>Contact us today</strong> for a free consultation.
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