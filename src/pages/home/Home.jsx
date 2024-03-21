import FoodCard from "../../components/foodCard/FoodCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Heading from "../../components/heading/Heading";

const Home = () => {
  return (
    <div>
      <Header />
      <Heading />
      <FoodCard
        foodLink={"fail"}
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
