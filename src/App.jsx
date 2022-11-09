import React from "react";
import { Hero, Sales } from "./components";
import { heroapi, toprateslaes, popularsales } from "./data/data";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi}></Hero>
        <Sales endpoint={popularsales} ifExists />
        <Sales endpoint={toprateslaes} />
      </main>
    </>
  );
};

export default App;
