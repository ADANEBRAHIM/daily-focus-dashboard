import React from "react";
import Header from "./components/Header";
import DailyFocus from "./components/DailyFocus";
import './App.css';  // keep your CSS if you want styles


function App() {
  return (
    <div className="App">
      <Header />
      <DailyFocus />
    </div>
  );
}

export default App;
