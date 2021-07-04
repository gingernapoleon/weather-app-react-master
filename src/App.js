import React from "react";
import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
  <div className="App">
  <div className="container">
    <Weather defaultcity="New York"/>
    <footer>
      This project was coded by{" "}
      <a href="https://www.linkedin.com/in/napoleon-6b89b756/" 
      target="_blank" 
      rel="noreferrer">
      Ginger Napoleon
      </a>{" "} 
      and is{" "}  
      <a href="https://github.com/gingernapoleon/weather-app-react" 
      target="_blank" 
      rel="noreferrer"> 
      open-sourced on Github
      </a> 
    </footer>
    </div>
    </div>
  );
}
