import { useParams } from "react-router-dom";

import RecipeDetail from "../../components/recipeDetail/RecipeDetail";
import FlavorCard from "../../components/flavorCard/FlavorCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Ingredients from "../../components/ingredients/Ingredients";
import Author from "../../components/author/Author";

import "./detail.scss";
import data from "../../mock/recipe.json";

const Detail = () => {
  const params = useParams();

  const recipe = data.find((item) => item.id === params.slug);

  console.log(recipe);

  console.log("loc, => ", params.id);
  return (
    <div className="detail">
      <Header headerLink={"/"} />
      <div className="detail__content">
        <FlavorCard
          flavorTitle={recipe.recipe_name}
          flavorDescription={recipe.description}
          flavorImage={recipe.image}
          flaverHowTo={recipe.instructions}
        />
        <div>
          <RecipeDetail
            category={recipe.type}
            cookTime={recipe.service_info.cook_time}
            nutrition={recipe.service_info.calories}
            servings={recipe.service_info.servings}
          />
          <Ingredients
            title={"Ingredients"}
            title2={"Needed:"}
            neededContent={recipe.needed}
            title3={"Nutrition"}
            nutritionContent={recipe.nutrition}
            ingredients={recipe.ingredients}
          />
        </div>
        <Author
          image={recipe.author.image}
          name={recipe.author.name}
          content={recipe.author.bio}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
