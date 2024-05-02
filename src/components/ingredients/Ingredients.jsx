import "./ingredients.scss";

import PropTypes from "prop-types";

const Ingredients = ({ title, title2, title3, ingredients, neededContent,nutritionContent}) => {
  return (
    <div className="ingredients">
      {
        <div className="ingredients__table ">
          <h6 className="ingredients__title">{title}</h6>
          <ul className="ingredients__content">
            {Object.entries(ingredients).map(([ingredient, details]) => (
              <li key={ingredient}>
                {ingredient}: {details.quantity} {details.unit}
              </li>
            ))}
          </ul>
        </div>
      }
      <div className="ingredients__table ">
        <h6 className="ingredients__title">{title2}</h6>
        <ul className="ingredients__content">
          {neededContent.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
      </div>
      <div className="ingredients__table ">
        <h6 className="ingredients__title">{title3}</h6>
        <ul className="ingredients__content">
        {Object.entries(nutritionContent).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}

        </ul>
      </div>
    </div>
  );
};

Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  nutritionContent: PropTypes.string.isRequired,
  neededContent: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
};

export default Ingredients;
