import React from "react";
import "./App.css";
import ImageUpload from "./features/ImageUpload/ImageUpload";
import Header from "./components/Header";
import Donations from "./components/Donations/Donations";

function App() {
  return (
    <header>
      <Header />
      <ImageUpload />
      <Donations />
    </header>
  );
}

export default App;
