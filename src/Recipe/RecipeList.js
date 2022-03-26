import React from "react";
import Recipe from "./Recipe";

export default function RecipeList(props) {
  return (
    <>
      <div>
        {props.recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <button>Add Recipe</button>
    </>
  );
}
