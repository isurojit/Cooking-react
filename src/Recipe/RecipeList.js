import React from "react";
import Recipe from "./Recipe";
import "../Styling/recipelist.css";

export default function RecipeList(props) {
  const { recipes, recipeAddHandler, recipeDeleteHandler } = props;
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              {...recipe}
              recipeDeleteHandler={recipeDeleteHandler}
            />
          );
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
