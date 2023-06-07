import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"

import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  return (
    <div className="App">
        <Hero hero={hero} />
        <About about={hero.aboutMe} />
        <Education education={education} />
{/*        <Experience experience={experience} /> */}
{/*	      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
	      /> */}
    </div>
  );
}

export default App;