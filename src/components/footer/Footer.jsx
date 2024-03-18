import { Facebook, Instagram, Pinterest, Twitter, Youtube } from "../../../dist";
import footerImage from "../../assets/img/cook & talk-light.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--image">
        <img src={footerImage} alt="" />
      </div>
      <div>
        <p>
          I am always sharing fresh, flavorful, healthy recipes that I love to
          make and eat in my real life
        </p>
      </div>
      <div className="footer--icons">
        <Youtube />
        <Instagram />
        <Twitter />
        <Facebook />
        <Pinterest />
      </div>
      <div className="footer--about">
        <p>© Copyright Glint 2022</p>
      </div>
    </div>
  );
};

export default Footer;
