import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./sharebutton.css";
import { ShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton, FacebookIcon, TwitterIcon, WhatsappIcon, EmailIcon } from 'react-share';

// const ShareButton = ({ url, socialMedia }) => {
//   const handleClick = () => {
//     switch (socialMedia) {
//       case "twitter":
//         window.open(
//           `${url}`,
//           "_blank"
//         );
//         break;
//       case "facebook":
//         window.open(
//           `${url}`,
//           "_blank"
//         );
//         break;
//       case "instagram":
//         window.open(
//           `${url}`,
//           "_blank"
//         );
//         break;
//       default:
//         break;
//     }
//   };

//   const getIcon = () => {
//     switch (socialMedia) {
//       case "twitter":
//         return <FaTwitter className="icon" />;
//       case "facebook":
//         return <FaFacebook className="icon" />;
//       case "instagram":
//         return <FaInstagram className="icon" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <button onClick={handleClick}>
//       {getIcon()}
//       <span className="label">
//         Share on {socialMedia.charAt(0).toUpperCase() + socialMedia.slice(1)}
//       </span>
//     </button>
//   );
// };

// export default ShareButton;


function ShareButtons({ url, title }) {
  return (
    <div>
      <FacebookShareButton url="https://medium.com/game-theory-in-competitive-programming/sprague-grundy-theorem-5938233fb64b" quote={title}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <EmailShareButton url={url} subject={title}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </div>
  );
}

export default ShareButtons;


