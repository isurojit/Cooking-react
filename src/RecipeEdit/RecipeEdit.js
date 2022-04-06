import React, { useContext } from "react";
import { RecipeContex } from "../Components/App";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

const RecipeEdit = ({ recipe }) => {
  const { recipeChangeHandler } = useContext(RecipeContex);

  const changeHandler = (change) => {
    recipeChangeHandler(recipe.id, { ...recipe, ...change });
  };

  const recipeIngredientChangeHandler = (id, ingredient) => {
    const newRecipeIngredient = [...recipe.ingredients];
    const index = newRecipeIngredient.findIndex((i) => i.id === id);
    newRecipeIngredient[index] = ingredient;
    changeHandler({ ingredients: newRecipeIngredient });
  };

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label className="recipe-edit__label" htmlFor="name">
          Name
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onInput={(e) => changeHandler({ name: e.target.value })}
        />
        <label className="recipe-edit__label" htmlFor="cookTime">
          Cook Time
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          onInput={(e) => changeHandler({ cookTime: e.target.value })}
        />
        <label className="recipe-edit__label" htmlFor="servings">
          Servings
        </label>
        <input
          className="recipe-edit__input"
          type="number"
          name="servings"
          id="servings"
          min="1"
          value={recipe.servings}
          onInput={(e) =>
            changeHandler({ servings: parseInt(e.target.value) || 0 })
          }
        />
        <label className="recipe-edit__label" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          className="recipe-edit__input"
          name="instructions"
          id="instructions"
          value={recipe.instructions}
          onInput={(e) => changeHandler({ instructions: e.target.value })}
        ></textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            recipeIngredientChangeHandler={recipeIngredientChangeHandler}
          />
        ))}
      </div>

      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredients</button>
      </div>
    </div>
  );
};

export default RecipeEdit;
