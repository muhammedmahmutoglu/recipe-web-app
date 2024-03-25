import RecipeDetail from "../../components/detailCard/RecipeDetail";
import FlavorCard from "../../components/flavorCard/FlavorCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Ingredients from "../../components/ingredients/Ingredients";

import "./detail.scss";

const Detail = () => {
  return (
    <div className="detail">
      <Header headerLink={"/"} />
      <div className="detail--content">
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
          <RecipeDetail category={"Lunch"} cookTime={"30 Minutes"} nutrition={"221 kcal"} servings={"2-3"}  />
          <Ingredients   />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
