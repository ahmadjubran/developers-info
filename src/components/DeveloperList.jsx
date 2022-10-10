import React from "react";
import { actionType } from "./Developer";

export const DeveloperList = ({ developers, dispatch }) => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          padding: 0,
        }}
      >
        {developers.map((developer) => (
          <li
            key={developer.id}
            style={{
              listStyle: "none",
              width: "50%",
              border: "1px solid black",
            }}
          >
            <div
              onClick={() =>
                dispatch({
                  type: actionType.REMOVE_DEVELOPER,
                  id: developer.id,
                })
              }
            >
              <h3>Developer Name: {developer.name}</h3>
              <p>Programming Language: {developer.programmingLanguage}</p>
              <p>Technology: {developer.technology}</p>
              <p>Favorite Food: {developer.favoriteFood}</p>
              <p>Favorite Drink: {developer.favoriteDrink}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
