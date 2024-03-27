import "./header.scss";
import headerImage from "../../assets/img/cook & talk.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ headerLink }) => {
  return (
    <div className="header">
      <Link className="header__image" to={headerLink}>
        <img
          className="header__content"
          src={headerImage}
          alt="cook&talk"
        />
      </Link>
    </div>
  );
};

Header.propTypes = {
  headerLink: PropTypes.string.isRequired,
};
export default Header;
