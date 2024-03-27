import { ChefHat, Dinner, HotFood, HotPot } from "../../../dist";
import "./recipe-detail.scss";

import PropTypes from "prop-types";

const RecipeDetail = ({servings,nutrition,cookTime,category}) => {
  return (
      <div className="recipe-detail">
        <div className="recipe-detail__item">
          <HotPot />
          <h6 className="recipe-detail__title">Category :</h6>
          <span >{category}</span>
        </div>

        <div className="recipe-detail__item">
          <ChefHat />
          <h6 className="recipe-detail__title">Cook Time :</h6>
          <span >{cookTime} </span>
        </div>

        <div className="recipe-detail__item">
          <Dinner />
          <h6 className="recipe-detail__title">Nutrition :</h6>
          <span>{nutrition} </span>
        </div>

        <div className="recipe-detail__item">
          <HotFood />
          <h6 className="recipe-detail__title">Servings :</h6>
          <span>{servings} </span>
        </div>
      </div>
  );
};

RecipeDetail.propTypes = {
  servings: PropTypes.string.isRequired,
  nutrition: PropTypes.string.isRequired,
  cookTime: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default RecipeDetail;
