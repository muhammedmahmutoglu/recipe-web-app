
import "./header.scss";
import headerImage from "../../assets/img/cook & talk.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header--image">
        <img
          className="header--image__content"
          src={headerImage}
          alt="cook&talk"
        />
      </div>
    </div>
  );
};

export default Header;
