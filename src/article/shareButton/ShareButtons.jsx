import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./sharebutton.css";
import {
  ShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

function ShareButtons({ url, title }) {
  return (
    <div>
      <FacebookShareButton url={url} quote={title}>
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
