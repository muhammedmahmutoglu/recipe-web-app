import "./ingredients.scss";

const Ingredients = () => {
  return (
    <div className="ingredients">
      <div className="ingredients--table ingredients--box">
        <h6 className="ingredients--table__title">Ingredients</h6>
        <ul className="ingredients--table__content">
          <li>Besan (gram flour) - 1 cup</li>
          <li>Eno fruit salt - 1 tsp</li>
          <li>Yogurt - 1/2 cup</li>
          <li>Water - 1/2 cup</li>
          <li>Salt - 1/2 tsp</li>
          <li>Sugar - 1 tsp</li>
          <li>Turmeric powder - 1/4 tsp</li>
          <li>Green chilies - 2-3, finely chopped</li>
          <li>Ginger - 1 inch, grated or finely chopped</li>
          <li>Lemon juice - 1-2 tsp</li>
          <li>Oil - 1 tbsp</li>
          <li>Mustard seeds - 1 tsp</li>
          <li>Curry leaves - a few</li>
          <li>Water - for steaming</li>
        </ul>
      </div>

      <div className="ingredients--table ingredients--box">
        <h6 className="ingredients--table__title">Needed:</h6>
        <ul className="ingredients--table__content">
          <li>Blender or mixer grinder</li>
          <li>Serving dish</li>
          <li>Mixing bowl</li>
        </ul>
      </div>
      <div className="ingredients--table ingredients--box">
        <h6 className="ingredients--table__title">Nutrition</h6>
        <ul className="ingredients--table__content">
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

export default Ingredients;
