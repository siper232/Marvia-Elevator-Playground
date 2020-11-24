import React from "react";
import './App.css';
import Elevator from "./Components/Elevator";
import {Typography} from "@material-ui/core";

function App() {
  return (
    <div className="App">
        <Typography>Elevator Playground</Typography>
        <Elevator amountFloors={5} />
    </div>
  );
}

export default App;
