import React, { useState, useEffect } from 'react';

const SlideSection = () => {
   const slides = [
      {
         id: 1,
         backgroundImage: '/Img/main-1.png',
         title: 'Welcome to Green Land Paving',
         description: 'Transform your home or place with our premium interlock stone solutions.',
      },
      {
         id: 2,
         backgroundImage: '/Img/main-2.jpeg',
         title: 'Quality You Can Trust',
         description: 'We provide durable and aesthetically pleasing paving for any space.',
      },
      {
         id: 3,
         backgroundImage: '/Img/main-3.jpeg',
         title: 'Custom Designs for Your Space',
         description: 'Create unique outdoor spaces with our customizable interlock stone designs.',
      },
   ];

   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 10000);

      return () => clearInterval(interval);
   }, [slides.length]);

   const handleViewMoreClick = () => {
      window.scrollBy({
         top: 700,
         behavior: 'smooth'
      });
   };

   return (
      <section className="section-slide">
         <div className="wrap-slick1 rs2-slick1">
            <div className="slick1">
               {slides.map((slide, index) => (
                  <div
                     key={slide.id}
                     className={`item-slick1 bg-overlay1 ${index === currentSlide ? 'active' : 'hidden'}`}
                     style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                  >
                     <div className="container h-full">
                        <div className="flex-col-c-m h-full p-t-100 p-b-60 respon5">
                           <div className="text-center">
                              <h1 className="ltext-101 cl2"
                                 style={{
                                    fontSize: '3rem',
                                    fontWeight: '900',
                                    color: '#fff',
                                    background: `linear-gradient(90deg, rgba(224, 224, 224, 0.14) 0%, rgba(255, 255, 255, 0.46) 50%, rgba(224, 224, 224, 0.14) 100%)`, // Fixed syntax
                                    borderRadius: '20px',
                                    padding: '20px 40px',
                                    border: "none",
                                    borderLeft: '1px solid rgba(255, 255, 255, 0.7)',
                                    borderRight: '1px solid rgba(255, 255, 255, 0.7)'
                                 }} >
                                 {slide.title}
                              </h1>
                              <p style={{ fontSize: '1.3rem', color: '#fff' }}>
                                 {slide.description}
                              </p>
                           </div>
                           <div
                              style={{
                                 position: 'absolute',
                                 bottom: '4rem',
                                 left: '50%',
                                 transform: 'translateX(-50%)',
                              }}
                           >
                              <div className="p-t-18" onClick={handleViewMoreClick}>
                                 <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">View More</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="wrap-slick1-dots p-lr-10"></div>
         </div>
      </section>
   );
};

export default SlideSection;