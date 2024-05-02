import "./flavor-card.scss";

import PropTypes from "prop-types";

const FlavorCard = ({
  flavorDescription,
  flavorTitle,
  flavorImage,
  flaverHowTo,
}) => {
  return (
    <div className="flavor">
      <h1 className="flavor__header">{flavorTitle}</h1>

      <p className="flavor__description">{flavorDescription}</p>

      <div className="flavor__image">
        <img src={flavorImage} alt="Food image" />
      </div>

      <h6 className="flavor__title">Jump to recipe</h6>
      <p className="flavor__content">{flaverHowTo}</p>

      <div></div>
    </div>
  );
};

FlavorCard.propTypes = {
  flavorDescription: PropTypes.string.isRequired,
  flavorTitle: PropTypes.string.isRequired,
  flavorImage: PropTypes.string.isRequired,
  flaverHowTo: PropTypes.string.isRequired,
};

export default FlavorCard;
