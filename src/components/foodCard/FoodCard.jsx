import { Link } from "react-router-dom";
import "./foodCard.scss";

import PropTypes from "prop-types";
const FoodCard = ({ foodType, foodName, foodImage, foodLink }) => {
  return (
    <div className="food-card">
      <Link to={foodLink} className="food-card--content ">
        <div className="food-card--content__picture">
          <img src={foodImage} alt="food image" />
          <div className="shadow"></div>
        </div>
        {<h5 className="food-card--content__type">{foodType}</h5>}
        <h4 className="food-card--content__name">{foodName}</h4>
      </Link>
    </div>
  );
};

FoodCard.propTypes = {
  foodType: PropTypes.string.isRequired,
  foodName: PropTypes.string.isRequired,
  foodImage: PropTypes.string.isRequired,
  foodLink: PropTypes.string.isRequired,
};

export default FoodCard;
