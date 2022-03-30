import React, { useContext } from "react";
import Recipe from "./Recipe";
import "../Styling/recipelist.css";
import { RecipeContex } from "../Components/App";

export default function RecipeList({ recipes }) {
  const { recipeAddHandler } = useContext(RecipeContex);
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={recipeAddHandler}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
