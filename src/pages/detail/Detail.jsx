import RecipeDetail from "../../components/recipeDetail/RecipeDetail";
import FlavorCard from "../../components/flavorCard/FlavorCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Ingredients from "../../components/ingredients/Ingredients";

import "./detail.scss";

const Detail = () => {
  return (
    <div className="detail">
      <Header headerLink={"/"} />
      <div className="detail__content">
        <FlavorCard
          flavorTitle={"Pasta with tomato"}
          flavorDescription={
            "A light and refreshing pasta dish featuring fresh tomatoes, mozzarella, cheese, and fragrant basil, tossed with pasta for a simple and delicious meal that celebrates the flavors of summer."
          }
          flavorImage={
            "https://assets.website-files.com/6455d3a136a229776428bcfb/6476ebf47bdc09608da5b136_big-re-02.jpg"
          }
        />
        <div>
          <RecipeDetail
            category={"Lunch"}
            cookTime={"30 Minutes"}
            nutrition={"221 kcal"}
            servings={"2-3"}
          />
          <Ingredients
            title={"Ingredients"}
            title2={"Needed:"}
            title3={"Nutrition"}
            description={[
              "Besan (gram flour) - 1 cup",
              "Eno fruit salt - 1 tsp",
              "Yogurt - 1/2 cup",
              "Water - 1/2 cup",
              "Salt - 1/2 tsp",
              "Sugar - 1 tsp",
              "Turmeric powder - 1/4 tsp",
              "Green chilies - 2-3, finely chopped",
              "Ginger - 1 inch, grated or finely chopped",
              "Lemon juice - 1-2 tsp",
              "Oil - 1 tbsp",
              "Mustard seeds - 1 tsp",
              "Curry leaves - a few",
              "Water - for steaming",
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
