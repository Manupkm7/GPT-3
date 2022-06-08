import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./components/Containers";
import { Brand, Navbar } from "./components/Sections/index";
import CTA from "./components/Sections/Cta/Cta.jsx";
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
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
