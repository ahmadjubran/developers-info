import { v4 as uuidv4 } from "uuid";

export const actionType = {
  ADD_DEVELOPER: "ADD_DEVELOPER",
  REMOVE_DEVELOPER: "REMOVE_DEVELOPER",
};

export const developerReducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_DEVELOPER:
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.payload.name,
          programmingLanguage: action.payload.programmingLanguage,
          technology: action.payload.technology,
          favoriteFood: action.payload.favoriteFood,
          favoriteDrink: action.payload.favoriteDrink,
        },
      ];
    case actionType.REMOVE_DEVELOPER:
      return state.filter((developer) => developer.id !== action.id);
    default:
      return state;
  }
};
