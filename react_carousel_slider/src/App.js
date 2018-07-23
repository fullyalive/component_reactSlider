import React, { Component } from "react";
import AwesomeSlider from "./AwesomeSlider";
import AnimatedSlider from "./AnimatedSlider";

const content = [
  { title: "Title1", description: "Description1" },
  { title: "Title2", description: "Description2" },
  { title: "Title3", description: "Description3" },
  { title: "Title4", description: "Description4" }
];

class App extends Component {
  render() {
    return (
      <div>
        <AwesomeSlider content={content} />
        <AnimatedSlider content={content} />
      </div>
    );
  }
}

export default App;
