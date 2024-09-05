import React from "react";
import styles from "./Footer1.module.css";

export default function Footer1() {
  return (
    // <div class="footer_container">
    // <section class="info_section ">
    //   <div class="container">
    //     <div class="contact_box">
    //       <a href="">
    //         <i class="fa fa-map-marker" aria-hidden="true"></i>
    //       </a>
    //       <a href="">
    //         <i class="fa fa-phone" aria-hidden="true"></i>
    //       </a>
    //       <a href="">
    //         <i class="fa fa-envelope" aria-hidden="true"></i>
    //       </a>
    //     </div>
    //     <div class="info_links">
    //       <ul>
    //         <li class="active">
    //           <a href="index.html">
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a href="about.html">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a class="" href="blog.html">
    //             Blog
    //           </a>
    //         </li>
    //         <li>
    //           <a class="" href="testimonial.html">
    //             Testimonial
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div class="social_box">
    //       <a href="">
    //         <i class="fa fa-facebook" aria-hidden="true"></i>
    //       </a>
    //       <a href="">
    //         <i class="fa fa-twitter" aria-hidden="true"></i>
    //       </a>
    //       <a href="">
    //         <i class="fa fa-linkedin" aria-hidden="true"></i>
    //       </a>
    //     </div>
    //   </div>
    // </section>
    // <footer class="footer_section">
    //   <div class="container">
    //     <p>
    //       &copy; <span id="displayYear"></span> All Rights Reserved By
    //       <a href="https://html.design/">CatererNearMe</a>
    //       Distributed By: <a href="https://themewagon.com/">Caterer</a>
    //     </p>
    //   </div>
    // </footer>
    // </div>
    <div className={styles.footer}>
      <div className={styles.footerRight}>
        <h4>For Orders Call Us On - +91 93212 91563</h4>
        <p>One Stop Solution For All Catering Needs!</p>
      </div>
      <div className={styles.footerLeft}>
        <h4>Socials</h4>
        <p
          onClick={() =>
            window.open(
              "https://www.instagram.com/caterersnearme.in/?igsh=NHNlcnBzOXltajVr"
            )
          }
        >
          Instagram
        </p>
        <p
          onClick={() =>
            window.open("https://www.linkedin.com/company/caterersnearme/")
          }
        >
          LinkedIn
        </p>
      </div>
    </div>
  );
}
