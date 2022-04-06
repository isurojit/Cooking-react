import React, { useContext } from "react";
import { RecipeContex } from "../Components/App";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { v4 as uuidv4 } from "uuid";

const RecipeEdit = ({ recipe }) => {
  const { recipeChangeHandler, recipeSelectHandler } = useContext(RecipeContex);

  const changeHandler = (change) => {
    recipeChangeHandler(recipe.id, { ...recipe, ...change });
  };

  const recipeIngredientChangeHandler = (id, ingredient) => {
    const newRecipeIngredient = [...recipe.ingredients];
    const index = newRecipeIngredient.findIndex((i) => i.id === id);
    newRecipeIngredient[index] = ingredient;
    changeHandler({ ingredients: newRecipeIngredient });
  };

  function addIngredientHandler() {
    const newingredients = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    changeHandler({ ingredients: [...recipe.ingredients, newingredients] });
  }

  function deleteIngredientHandler(id) {
    changeHandler({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          className="btn recipe-edit__remove-button"
          onClick={() => recipeSelectHandler(undefined)}
        >
          &times;
        </button>
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
          onChange={(e) => changeHandler({ name: e.target.value })}
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
          onChange={(e) => changeHandler({ cookTime: e.target.value })}
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
          onChange={(e) =>
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
          onChange={(e) => changeHandler({ instructions: e.target.value })}
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
            deleteIngredientHandler={deleteIngredientHandler}
            recipeIngredientChangeHandler={recipeIngredientChangeHandler}
          />
        ))}
      </div>

      <div className="recipe-edit__add-ingredient-btn-container">
        <button
          className="btn btn--primary"
          onClick={() => addIngredientHandler()}
        >
          Add Ingredients
        </button>
      </div>
    </div>
  );
};

export default RecipeEdit;
