import { useReducer } from "react";
import "./App.css";
import { developerReducer } from "./components/Developer";
import DeveloperForm from "./components/DeveloperForm";
import { DeveloperList } from "./components/DeveloperList";

function App() {
  const [developers, dispatch] = useReducer(developerReducer, []);
  return (
    <div className="App">
      <DeveloperForm dispatch={dispatch} />
      <DeveloperList developers={developers} dispatch={dispatch} />
    </div>
  );
}

export default App;
