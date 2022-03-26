import React from "react";
import Ingredients from "./Ingredients";

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map((ingredient) => {
    return <Ingredients key={ingredient.id} {...ingredient} />;
  });
  return <div className="ingredient-grid">{ingredientElements}</div>;
}
