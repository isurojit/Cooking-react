import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContex } from "../Components/App";

export default function Recipe(props) {
  const { recipeDeleteHandler, recipeSelectHandler } = useContext(RecipeContex);
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__header-title">{name}</h3>
        <div>
          <button
            className="btn btn--primary mr-1"
            onClick={() => recipeSelectHandler(id)}
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => recipeDeleteHandler(id)}
          >
            Delete{" "}
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__lable">Cook Time: </span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__lable">Servings: </span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__lable">Instructions:</span>
        <div className="recipe__value recipe__value--instructions recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__lable">Ingredients:</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
