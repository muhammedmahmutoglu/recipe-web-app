import "./flavor-card.scss";

import PropTypes from "prop-types";

const FlavorCard = ({ flavorDescription, flavorTitle, flavorImage }) => {
  return (
    <div className="flavor">
      <h1 className="flavor__header">{flavorTitle}</h1>

      <p className="flavor__description">{flavorDescription}</p>

      <div className="flavor__image">
        <img src={flavorImage} alt="Food image" />
      </div>

      <h6 className="flavor__title">Jump to recipe</h6>
      <p className="flavor__content">
        <strong>Because</strong> occasionally circumstances occur in which toil
        and pain can procure him some great pleasure. To take a trivial example,
        which of us ever undertakes laborious physical exercise, except to
        obtain some advantage from it? But who has any right to find fault with
        a man who chooses to enjoy a pleasure that has no annoying consequences,
        or one who avoids a pain that produces no resultant pleasure?
      </p>

      <p className="flavor__content">
        1.Toss together (most of) the dry ingredients. The wise man therefore
        always holds in these matters to this principle of selection: he rejects
        pleasures to secure other greater pleasuresThe wise man therefore always
        holds in these matters to this principle of selection.
      </p>

      <p className="flavor__content">
        2.Toss together (most of) the dry ingredients. The wise man therefore
        always holds in these matters to this principle of selection: he rejects
        pleasures to secure other greater pleasuresThe wise man therefore always
        holds in these matters to this principle of selection.
      </p>

      <div></div>
    </div>
  );
};

FlavorCard.propTypes = {
  flavorDescription: PropTypes.string.isRequired,
  flavorTitle: PropTypes.string.isRequired,
  flavorImage: PropTypes.string.isRequired,
};

export default FlavorCard;
