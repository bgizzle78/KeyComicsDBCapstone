import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./views/Header";
import ApplicationViews from "./views/ApplicationViews";

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <ApplicationViews />
      </Router>
    </div>
  );
}

export default App;