import React, { useEffect } from "react";

import Axios from "axios";
import { useState } from "react";
import Card from "./Card";
function Search() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [Health, setHealth] = useState("vegan");
  const YOUR_APP_ID = "f6a90525";
  const YOUR_APP_KEY = "61daf752a692568f208edef3613c5c4d";
  // var url = ` https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40&&health=${healthLabels}
  //  `;
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=${Health}
   `;
  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="search-con">
      <h1 className="head">
        What Do You Want to <span className="cook">Cook?</span>{" "}
      </h1>
      <form className="search" onSubmit={onSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Enter recipes or ingredients"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="submit" type="submit" value="Search" />
        <select className="app_healthLabels">
          <option onClick={() => setHealth("vegan")}>Vegan</option>

          <option onClick={() => setHealth("vegetarian")}>Vegetarian</option>

          <option onClick={() => setHealth("low-Sugar")}>Low Sugar</option>

          <option onClick={() => setHealth("dairy-free")}>Dairy-Free</option>

          <option onClick={() => setHealth("egg-free")}>Egg-Free</option>
        </select>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => {
          return <Card recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default Search;
