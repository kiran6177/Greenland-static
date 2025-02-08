import React from 'react';

const Footer = () => {

   const socialLinks = [
      { id: 1, icon: 'fa fa-facebook', link: 'https://www.facebook.com/greenlandpaving' },
      { id: 2, icon: 'fa fa-instagram', link: 'https://www.instagram.com/greenlandpaving' },
      { id: 3, icon: 'fa fa-youtube', link: 'https://www.youtube.com/@Greenlandpaving' },
   ];

   return (
      <footer className="bg3 p-t-75 p-b-32">
         <div className="container">
            <div className="row">
               <div className="col-sm-6=12 col-lg-12 p-b-50">
                  <h4 className="stext-301 cl0 p-b-30 text-center">GET IN TOUCH</h4>
                  <p className="stext-107 cl7 text-center">
                     Any questions? Let us know in Greenlandpaving@gmail.com
                  </p>
                  <div className="p-t-27 text-center">
                     {socialLinks.map((social) => (
                        <a key={social.id} href={social.link} className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                           <i className={social.icon}></i>
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            <p className="stext-107 cl6 txt-center">
               Copyright &copy; {new Date().getFullYear()} All rights reserved
            </p>
         </div>
      </footer>
   );
};

export default Footer;