import React from 'react';
import "./About.css";

const About = ({about}) => {
    console.log(about);
  return (
    <div className='about'>
        <div className='card'>
            {about.map((item,i) => {
        return (
            <div key={JSON.stringify(item)}>
            <p>
            {item.info}
            </p>
            </div>
            );
            })}
        </div>
    </div>
  );
};

export default About;