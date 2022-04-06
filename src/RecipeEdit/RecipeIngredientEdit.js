import React from "react";

const RecipeIngredientEdit = (props) => {
  const { ingredient, recipeIngredientChangeHandler } = props;

  const changeHandler = (change) => {
    recipeIngredientChangeHandler(ingredient.id, { ...ingredient, ...change });
  };
  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onInput={(e) => changeHandler({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onInput={(e) => changeHandler({ amount: e.target.value })}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  );
};

export default RecipeIngredientEdit;
