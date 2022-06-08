import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./components/Containers";
import { Brand, Navbar } from "./components/Sections/index";
import { Cta } from "./components/Sections/Cta/Cta";
import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;
