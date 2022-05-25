import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <main
        className="container mx-auto px-4 py-5"
        // style={{ background: "pink" }}
      >
        <section className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 text-left place-items-center items-center">
          <Card />
        </section>
      </main>
      <FAQ />
    </React.Fragment>
  );
};
export default App;
