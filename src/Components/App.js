import React from "react";
import "../Styling/app.css";
import RecipeList from "../Recipe/RecipeList";

const App = () => {
  return (
    <>
      <RecipeList recipes={sampleRecipeList} />
    </>
  );
};

const sampleRecipeList = [
  {
    id: 1,
    name: "Grilled Chicken",
    servings: 4,
    cookTime: "15:00",
    instructions:
      " 1. Clean the Chicken. \n 2. Marinate overnight with salt, pepper, oilve oil & chilly spices. \n3. Grill it for 160c for 10 minutes. \n4. Serve it with wine.",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "800 gm",
      },
      {
        id: 2,
        name: "Salt",
        amount: "20 gm",
      },
      {
        id: 3,
        name: "Pepper",
        amount: "30 gm",
      },
      {
        id: 4,
        name: "Butter",
        amount: "50 gm",
      },
    ],
    image:
      "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/7/15/0/FN_Ultimate-BBQ-Chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1372185433827.jpeg",
  },
  {
    id: 2,
    name: "Chicken BBQ Pizza",
    servings: 3,
    cookTime: "25:00",
    instructions:
      " 1. Make a flour dough & seal it with dry cloth for 4 hrs. \n 2. Make an big round shape of that dough. \n3. Add pizza sauce, Chicken bbq & other ingredients. \n4. Put it on Oven for 15:00 at 200c. \n5. Slice the piza in multiple rectangle shape & serve it with wine.",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "200 gm",
      },
      {
        id: 2,
        name: "Flour",
        amount: "200 gm",
      },
      {
        id: 3,
        name: "Pizza Sauce",
        amount: "50 gm",
      },
      {
        id: 5,
        name: "Veggies",
        amount: "100 gm",
      },
    ],
    image:
      "https://images-gmi-pmc.edge-generalmills.com/331fb539-79c0-4664-b1f6-1107d8cc8bef.jpg",
  },
];
export default App;
