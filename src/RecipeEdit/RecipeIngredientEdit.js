import React from "react";

const RecipeIngredientEdit = (props) => {
  const { ingredient, recipeIngredientChangeHandler, deleteIngredientHandler } =
    props;

  const changeHandler = (change) => {
    recipeIngredientChangeHandler(ingredient.id, { ...ingredient, ...change });
  };
  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onChange={(e) => changeHandler({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onChange={(e) => changeHandler({ amount: e.target.value })}
      />
      <button
        className="btn btn--danger"
        onClick={() => deleteIngredientHandler(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
};

export default RecipeIngredientEdit;
