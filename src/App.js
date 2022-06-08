import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./components/Containers";
import { CTA, Brand, Navbar } from "./components/Sections";
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
