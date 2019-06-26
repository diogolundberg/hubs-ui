import React from "react";
import { Card } from "./components/card";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-column items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
