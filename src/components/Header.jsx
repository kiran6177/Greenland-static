import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
   const navigate = useNavigate();
   const menuItems = [
      { id: 1, name: 'Home', link: '/', },
      { id: 2, name: 'Products', link: '/products' },
      { id: 5, name: 'About', link: '/about' }
   ];

   return (
      <header className="header-v3">
         {/* Header Desktop */}
         <div className="container-menu-desktop trans-03">
            <div className="wrap-menu-desktop">
               <nav className="limiter-menu-desktop p-l-45">
                  {/* Logo Desktop */}
                  <h2 onClick={() => navigate("/")}
                     style={{
                        marginRight: "40px",
                        color: "black",
                        fontWeight: "600",
                        fontSize: "1.8rem",
                     }}>
                     GreenLand Paving
                  </h2>


                  {/* Menu Desktop */}
                  <div className="menu-desktop">
                     <ul className="main-menu">
                        {menuItems.map((item) => (
                           <li key={item.id}>
                              <a onClick={() => navigate(item.link)} >{item.name}</a>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Icon Header */}
                  <div className="wrap-icon-header flex-w flex-r-m h-full">


                     <div className="flex-c-m h-full p-lr-19">
                        <div className="icon-header-item cl0 hov-cl1 trans-04 p-lr-11 js-show-sidebar">
                           <i className="zmdi zmdi-menu"></i>
                        </div>
                     </div>
                  </div>
               </nav>
            </div>
         </div>

         {/* Header Mobile */}
         <div className="wrap-header-mobile">
            {/* Logo Mobile */}
            <div className="logo-mobile">
               <h2 onClick={() => navigate("/")}
                  style={{
                     marginRight: "40px",
                     color: "black",
                     fontWeight: "600",
                     fontSize: "1.8rem",
                  }}>
                  GreenLand Paving
               </h2>
            </div>

            {/* Button Show Menu Mobile */}
            <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
               <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
               </span>
            </div>
         </div>

         {/* Menu Mobile */}
         <div className="menu-mobile">
            <ul className="main-menu-m">
               {menuItems.map((item) => (
                  <li key={item.id}>
                     <a onClick={() => navigate(item.link)} >{item.name}</a>
                  </li>
               ))}
            </ul>
         </div>
      </header >
   );
};

export default Header;