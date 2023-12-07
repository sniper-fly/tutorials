export const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

import { Fragment } from "react";
import { recipes } from "./data.js";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Fragment key={recipe.id}>
          <h2>{recipe.name} </h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
}

import { recipes } from './data.js';

function Recipe({name, ingredients}) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe key={recipe.id} name={recipe.name} ingredients={recipe.ingredients} />
      )}
    </div>
  );
}

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
        <Fragment key={index}>
          { index !== 0 && <hr />}
          <p>
            {line}
          </p>
        </Fragment>
      )}
    </article>
  );
}
