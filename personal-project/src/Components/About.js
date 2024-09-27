import React, { useState } from 'react';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-start flex-col">
      <div>Hi, My name is</div>
      <h1>Aneesah Sabar</h1> {/* Directly use the <h1> tag */}
      <div>“Exploring the Future of AI, NLP, and LLMs, One Innovation at a Time!"</div>
      <div>I am a 3rd Year Artificial Intelligence Undergraduate curious in learning new technologies related AI, Data Science, and NLP.</div>
    </div>
  );
};

export default About;
