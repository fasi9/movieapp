import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Components/Table"
import Buttons from "./Components/Buttons"
import NextPage from "./Components/Nextpage";

const backpicture = new URL ("./879599.png", import.meta.url)

function App() {
  return (
    <div className="container">
      <div className="App">
        <Buttons />
        <Table />
<div>

  <image src = { backpicture } />
</div>

        
      </div>
      <h1>
        Designed by Fasih 

      </h1>
     
    </div>
  );
}




export default App;