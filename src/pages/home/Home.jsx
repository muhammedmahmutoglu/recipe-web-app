import FoodCard from "../../components/foodCard/FoodCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
// import Heading from "../../components/heading/Heading";

import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Header headerLink={"/"} />
      <div className="home__heading">
      <h2 className="home__writing">If you’re ready to change your relationship with food for the better</h2>
    </div>
      {/* <Heading /> */}
      <FoodCard
        foodLink={"/detail-page"}
        foodType={"Appetizer"}
        foodName={"Crispy Chipotle Chicken Tacos"}
        foodImage={
          "https://assets.website-files.com/6455d3a136a229776428bcfb/645f77a9c7fb9e94b18e107d_re-03.jpg"
        }
      />
      <Footer />
    </div>
  );
};

export default Home;
