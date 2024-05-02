import FoodCard from "../../components/foodCard/FoodCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import recipies from "../../mock/recipe.json";


import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header headerLink={"/"} />
      <div className="home__heading">
        <h2 className="home__writing">
          If you’re ready to change your relationship with food for the better
        </h2>
      </div>
      <div className="home__food-card">
      {recipies.map((item) => (
        <FoodCard
          key={item}
          foodLink={`/detail-page/${item.slug}`}
          foodType={item.type}
          foodName={item.recipe_name}
          foodImage={item.image}
        />
      ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
