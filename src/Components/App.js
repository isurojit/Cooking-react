import React, { useState, useEffect } from "react";
import "../Styling/app.css";
import RecipeList from "../Recipe/RecipeList";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "../RecipeEdit/RecipeEdit";

export const RecipeContex = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipe";

const App = () => {
  const [selectedRecipeId, setselectedRecipeId] = useState();
  const [recipe, setRecipe] = useState(sampleRecipeList);

  const selectRecipe = recipe.find((rec) => rec.id === selectedRecipeId);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) {
      setRecipe(JSON.parse(recipeJSON));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipe));
  }, [recipe]);

  const recipeAddHandler = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 0,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };
    setselectedRecipeId(newRecipe.id);
    setRecipe([...recipe, newRecipe]);
  };

  function recipeDeleteHandler(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setselectedRecipeId(undefined);
    }
    setRecipe(recipe.filter((rec) => rec.id !== id));
  }
  const recipeSelectHandler = (id) => {
    setselectedRecipeId(id);
  };

  const recipeChangeHandler = (id, recipes) => {
    const newRecipe = [...recipe];
    const index = newRecipe.findIndex((r) => r.id === id);
    newRecipe[index] = recipes;
    setRecipe(newRecipe);
  };

  const recipeContexValue = {
    recipeAddHandler, //recipeAddHandler: recipeAddHandler,
    recipeDeleteHandler, //recipeDeleteHandler: recipeDeleteHandler,
    recipeSelectHandler,
    recipeChangeHandler,
  };

  return (
    <RecipeContex.Provider value={recipeContexValue}>
      <RecipeList recipes={recipe} />
      {selectRecipe && <RecipeEdit recipe={selectRecipe} />}
    </RecipeContex.Provider>
  );
};

const sampleRecipeList = [
  {
    id: uuidv4(),
    name: "Grilled Chicken",
    servings: 4,
    cookTime: "15:00",
    instructions:
      " 1. Clean the Chicken. \n 2. Marinate overnight with salt, pepper, oilve oil & chilly spices. \n3. Grill it for 160c for 10 minutes. \n4. Serve it with wine.",
    ingredients: [
      {
        id: uuidv4(),
        name: "Chicken",
        amount: "800 gm",
      },
      {
        id: uuidv4(),
        name: "Salt",
        amount: "20 gm",
      },
      {
        id: uuidv4(),
        name: "Pepper",
        amount: "30 gm",
      },
      {
        id: uuidv4(),
        name: "Butter",
        amount: "50 gm",
      },
    ],
    image:
      "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/7/15/0/FN_Ultimate-BBQ-Chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1372185433827.jpeg",
  },
  {
    id: uuidv4(),
    name: "Chicken BBQ Pizza",
    servings: 3,
    cookTime: "25:00",
    instructions:
      " 1. Make a flour dough & seal it with dry cloth for 4 hrs. \n 2. Make an big round shape of that dough. \n3. Add pizza sauce, Chicken bbq & other ingredients. \n4. Put it on Oven for 15:00 at 200c. \n5. Slice the piza in multiple rectangle shape & serve it with wine.",
    ingredients: [
      {
        id: uuidv4(),
        name: "Chicken",
        amount: "200 gm",
      },
      {
        id: uuidv4(),
        name: "Flour",
        amount: "200 gm",
      },
      {
        id: uuidv4(),
        name: "Pizza Sauce",
        amount: "50 gm",
      },
      {
        id: uuidv4(),
        name: "Veggies",
        amount: "100 gm",
      },
    ],
    image:
      "https://images-gmi-pmc.edge-generalmills.com/331fb539-79c0-4664-b1f6-1107d8cc8bef.jpg",
  },
];
export default App;
