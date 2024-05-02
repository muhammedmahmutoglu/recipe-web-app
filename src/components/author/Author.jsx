import PropTypes from "prop-types";


import "./author.scss";

const Author = ({image, content ,name}) => {
  return (
    <div className="author">
      <div className="author__image">
        <img
          src={image}
          alt=""
        />
      </div>
      <span className="author__name">{name}</span>
      <p>
        {content}
      </p>
    </div>
  );
};

Author.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Author;
