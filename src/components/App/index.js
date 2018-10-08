import React, { Component } from "react";
import Intro from "../Intro";
import "./App.css";
import "whatwg-fetch";
import "../../containers/series";
import Series from "../../containers/series";
//import SearchBox from "./../Searchbox";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Intro />
          <Series />
        </header>
      </div>
    );
  }
}

export default App;
