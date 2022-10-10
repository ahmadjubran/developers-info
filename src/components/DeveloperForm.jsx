import React, { useState } from "react";
import { actionType } from "./Developer";

function DeveloperForm({ dispatch }) {
  const [name, setName] = useState("");
  const [programmingLanguage, setProgrammingLanguage] = useState("");
  const [technology, setTechnology] = useState("");
  const [favoriteFood, setFavoriteFood] = useState("");
  const [favoriteDrink, setFavoriteDrink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !programmingLanguage ||
      !technology ||
      !favoriteFood ||
      !favoriteDrink
    )
      return;

    dispatch({
      type: actionType.ADD_DEVELOPER,
      payload: {
        name,
        programmingLanguage,
        technology,
        favoriteFood,
        favoriteDrink,
      },
    });
    setName("");
    setProgrammingLanguage("");
    setTechnology("");
    setFavoriteFood("");
    setFavoriteDrink("");
  };

  return (
    <div>
      <h2>Add a Developer</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "30%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "0.4rem" }}
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label htmlFor="programmingLanguage">Programming Language</label>
          <select
            name="programmingLanguage"
            id="programmingLanguage"
            value={programmingLanguage}
            onChange={(e) => setProgrammingLanguage(e.target.value)}
            style={{ padding: "0.5rem" }}
          >
            <option value="">Select a programming language</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
            <option value="PHP">PHP</option>
            <option value="Ruby">Ruby</option>
            <option value="Swift">Swift</option>
          </select>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label htmlFor="technology">Technology</label>
          <select
            name="technology"
            id="technology"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            style={{ padding: "0.5rem" }}
          >
            <option value="">Select a technology</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
            <option value="Django">Django</option>
            <option value="Flask">Flask</option>
            <option value="Spring">Spring</option>
            <option value="Laravel">Laravel</option>
            <option value="Ruby on Rails">Ruby on Rails</option>
          </select>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label htmlFor="favoriteFood">Favorite Food</label>
          <input
            type="text"
            id="favoriteFood"
            value={favoriteFood}
            onChange={(e) => setFavoriteFood(e.target.value)}
            style={{ padding: "0.4rem" }}
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label htmlFor="favoriteDrink">Favorite Drink</label>
          <input
            type="text"
            id="favoriteDrink"
            value={favoriteDrink}
            onChange={(e) => setFavoriteDrink(e.target.value)}
            style={{ padding: "0.4rem" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "0.5rem",
            backgroundColor: "#000",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Developer
        </button>
      </form>
    </div>
  );
}

export default DeveloperForm;
