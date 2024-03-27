import { Facebook, Instagram, Pinterest, Twitter, Youtube } from "../../../dist";
import footerImage from "../../assets/img/cook & talk-light.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__image">
        <img className="footer__content" src={footerImage} alt="cook&talk" />
      </div>

      <div>
        <p className="footer__writing">
          I am always sharing fresh, flavorful, healthy recipes that I love to
          make and eat in my real life
        </p>
      </div>
      <div className="footer__icons">
        <Youtube />
        <Instagram />
        <Twitter />
        <Facebook />
        <Pinterest />
      </div>
      <div className="footer__about">
        <p>© Copyright Glint 2022</p>
      </div>
    </div>
  );
};

export default Footer;
