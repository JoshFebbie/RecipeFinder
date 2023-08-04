// import React from "react";
// import { ImFacebook, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";
// import styles from "./Header.module.css";

// const Footer = () => {
//   return (
//     <footer>
//       <div className={styles.social_container}>
//         <h5>VISIT US ON SOCIAL !</h5>

//         <div className={styles.social_icons}>
//           <a id="insta" href="https://www.devmountain.com" target="_blank">
//             <ImInstagram size="2.0em" color="#ffffff" />
//           </a>
//           <a id="fb" href="https://www.devmountain.com" target="_blank">
//             <ImFacebook size="2.0em" color="#ffffff" />
//           </a>
//           <a id="twit" href="https://www.devmountain.com" target="_blank">
//             <ImTwitter size="2.0em" color="#ffffff" />
//           </a>
//           <a id="git" href="https://www.devmountain.com" target="_blank">
//             <ImGithub size="2.0em" color="#ffffff" />
//           </a>
//         </div>
//       </div>
//       {
        // <svg
        //   width="100"
        //   height="100"
        //   viewBox="0 0 512 512"
        //   fill="none"
        //   xmlns="http://www.w3.org/2000/svg"
        // >
        //   <circle
        //     cx="256"
        //     cy="256"
        //     r="248"
        //     stroke="#25AAE1"
        //     stroke-width="16"
        //   />
        //   <path
        //     d="M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5"
        //     stroke="#25AAE1"
        //     stroke-width="16"
        //     stroke-linecap="round"
        //     stroke-linejoin="round"
        //   />
        // </svg>
//       }
//     </footer>
//   );
// };

// export default Footer;

///====================================================///

import React from "react";
import { ImFacebook, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";
import styles from "./Header.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.social_container}>
        <div id="h5div">
          <h5>VISIT US ON SOCIAL !</h5>
        </div>

        <div className={styles.social_icons}>
          <a
            className={styles.circle}
            href="https://www.devmountain.com"
            target="_blank"
          >
            <ImInstagram size="2.0em" color="#ffffff" />
          </a>

          <a
            className={styles.circle}
            href="https://www.devmountain.com"
            target="_blank"
          >
            <ImFacebook size="2.0em" color="#ffffff" />
          </a>

          <a
            className={styles.circle}
            href="https://www.devmountain.com"
            target="_blank"
          >
            <ImTwitter size="2.0em" color="#ffffff" />
          </a>

          <a
            className={styles.circle}
            href="https://www.devmountain.com"
            target="_blank"
          >
            <ImGithub size="2.0em" color="#ffffff" />
          </a>
        </div>
      </div>
      {
        // <svg
        //   width="100"
        //   height="100"
        //   viewBox="0 0 512 512"
        //   fill="none"
        //   xmlns="http://www.w3.org/2000/svg"
        // >
        //   { <circle
        //     cx="256"
        //     cy="256"
        //     r="248"
        //     stroke="#25AAE1"
        //     stroke-width="16"
        //   /> }
        //   { <path
        //     d="M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5"
        //     stroke="#E56627"
        //     stroke-width="16"
        //     stroke-linecap="round"
        //     stroke-linejoin="round"
        //   /> }
        // </svg>
      }
    </footer>
  );
};

export default Footer;
