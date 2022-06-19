import React from "react";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";

const App: React.FC = () => {
  return (
    <main className="px-6 pt-10">
      <Header />
      <Gallery />
    </main>
  );
};

export default App;
