
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import "./AvailableMeals.Module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Spring Rolls",
    price: 100,
  },
  {
    id: "m2",
    name: "Manchurian",
    price: 100,
  },
  {
    id: "m3",
    name: "Kung Pao Chicken",
    price: 150,
  },
  {
    id: "m4",
    name: "Butter Garlic Prawn",
    price: 175,
  },
  {
    id: "m5",
    name: "Chilli Garic Noodles",
    price: 230,
  },
  {
    id: "m6",
    name: "Schezwan Noodles",
    price: 220,
  },
  {
    id: "m7",
    name: "Egg Hakka Noodles",
    price: 270,
  },
  {
    id: "m8",
    name: "Chicken Noodles",
    price: 290,
  },
  {
    id: "m9",
    name: "Veg Fried Rice",
    price: 190,
  },
  {
    id: "m10",
    name: "Chicken Fried Rice",
    price: 240,
  },
  {
    id: "m11",
    name: "Hot 'N Sour Soup",
    price: 95,
  },
  {
    id: "m12",
    name: "Wonton Soup",
    price: 105,
  },
  {
    id: "m13",
    name: "Egg Drop Soup",
    price: 130,
  },
  {
    id: "m14",
    name: "Beef Pho",
    price: 160,
  },
  {
    id: "m15",
    name: "Coconut Rolls",
    price: 60,
  },
  {
    id: "m16",
    name: "Crystal Cake",
    price: 75,
  },
  {
    id: "m17",
    name: "Fortune Cookies",
    price: 50,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;