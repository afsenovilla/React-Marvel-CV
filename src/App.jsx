import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import More from "./components/More"

import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
        <Hero hero={hero} />
        <About about={hero.aboutMe} />
        <button className="custom-btn btn-4" onClick={() => setShowEducation(true)}>
        Education
        </button>
        <button className="custom-btn btn-4" onClick={() => setShowEducation(false)}>
        Experience
        </button>
        {showEducation ? (
          <Education education={education} />
        ) : (
        <Experience experience={experience} />
        )}
	      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
	      />
    </div>
  );
}

export default App;