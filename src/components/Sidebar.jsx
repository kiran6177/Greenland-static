import React from 'react';

const Sidebar = () => {
   // State for sidebar links
   const sidebarLinks = [
      { id: 1, name: 'Home', link: 'index.html' },
      { id: 2, name: 'My Wishlist', link: '#' },
      { id: 3, name: 'My Account', link: '#' },
      { id: 4, name: 'Track Order', link: '#' },
      { id: 5, name: 'Refunds', link: '#' },
      { id: 6, name: 'Help & FAQs', link: '#' },
   ];

   // State for gallery images
   const galleryImages = [
      { id: 1, src: 'images/gallery-01.jpg' },
      { id: 2, src: 'images/gallery-02.jpg' },
      { id: 3, src: 'images/gallery-03.jpg' },
      { id: 4, src: 'images/gallery-04.jpg' },
      { id: 5, src: 'images/gallery-05.jpg' },
      { id: 6, src: 'images/gallery-06.jpg' },
      { id: 7, src: 'images/gallery-07.jpg' },
      { id: 8, src: 'images/gallery-08.jpg' },
      { id: 9, src: 'images/gallery-09.jpg' },
   ];

   return (
      <aside className="wrap-sidebar js-sidebar">
         <div className="s-full js-hide-sidebar"></div>

         <div className="sidebar flex-col-l p-t-22 p-b-25">
            {/* Close Button */}
            <div className="flex-r w-full p-b-30 p-r-27">
               <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-sidebar">
                  <i className="zmdi zmdi-close"></i>
               </div>
            </div>

            {/* Sidebar Content */}
            <div className="sidebar-content flex-w w-full p-lr-65 js-pscroll">
               {/* Sidebar Links */}
               <ul className="sidebar-link w-full">
                  {sidebarLinks.map((link) => (
                     <li key={link.id} className="p-b-13">
                        <a href={link.link} className="stext-102 cl2 hov-cl1 trans-04">
                           {link.name}
                        </a>
                     </li>
                  ))}
               </ul>

               {/* Gallery Section */}
               <div className="sidebar-gallery w-full p-tb-30">
                  <span className="mtext-101 cl5">@ CozaStore</span>

                  <div className="flex-w flex-sb p-t-36 gallery-lb">
                     {galleryImages.map((image) => (
                        <div key={image.id} className="wrap-item-gallery m-b-10">
                           <a
                              className="item-gallery bg-img1"
                              href={image.src}
                              data-lightbox="gallery"
                              style={{ backgroundImage: `url(${image.src})` }}
                           ></a>
                        </div>
                     ))}
                  </div>
               </div>

               {/* About Us Section */}
               <div className="sidebar-gallery w-full">
                  <span className="mtext-101 cl5">About Us</span>

                  <p className="stext-108 cl6 p-t-27">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus vulputate hendrerit. Praesent
                     faucibus erat vitae rutrum gravida. Vestibulum tempus mi enim, in molestie sem fermentum quis.
                  </p>
               </div>
            </div>
         </div>
      </aside>
   );
};

export default Sidebar;