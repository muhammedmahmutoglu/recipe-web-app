import "./ingredients.scss";

import PropTypes from "prop-types";

const Ingredients = ({ title, title2, title3, description }) => {
  return (
    <div className="ingredients">
      {
        <div className="ingredients__table ">
          <h6 className="ingredients__title">{title}</h6>
          <ul className="ingredients__content">
            {description.map((i, k) => (
              <li key={k}>{i}</li>
            ))}
          </ul>
        </div>
      }
      <div className="ingredients__table ">
        <h6 className="ingredients__title">{title2}</h6>
        <ul className="ingredients__content">
          <li>Blender or mixer grinder</li>
          <li>Serving dish</li>
          <li>Mixing bowl</li>
        </ul>
      </div>
      <div className="ingredients__table ">
        <h6 className="ingredients__title">{title3}</h6>
        <ul className="ingredients__content">
          <li>Calories: 221</li>
          <li>Carbohydrates: 43g</li>
          <li>Protein: 8g</li>
          <li>Fat: 1g</li>
          <li>Fiber: 3g</li>
          <li>Sodium: 1mg</li>
        </ul>
      </div>
    </div>
  );
};

Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Ingredients;
