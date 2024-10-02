import React, { useState } from 'react';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-start flex-col m-12">
      {/*Top Section*/}
      <div class='w-2/3'>
      <div class='text-gray-300 text-left px-16'>Hi, My name is</div>
      <h1 class='bg-[linear-gradient(90deg,_#3F8E9D_10%,_#8F40D8_40%)] bg-clip-text text-transparent text-left text-7xl font-bold px-16 py-4'>
             Aneesah Sabar</h1> {/* Directly use the <h1> tag */}
      <div class='text-gray-400 text-left px-16 text-3xl font-medium p-2'>“Exploring the Future of AI, NLP, and LLMs, One Innovation at a Time!"</div>
      <div class="text-gray-500 text-left px-16 text-lg">I am a 3rd Year Artificial Intelligence Undergraduate curious in learning new technologies related AI, Data Science, and NLP.</div>
      </div>
      <div class="w-1/3">
      </div>
      {/*About me section*/}
      <div>
        <h1 class='bg-[linear-gradient(90deg,_#3F8E9D_30%,_#8F40D8_60%)] bg-clip-text text-transparent text-center text-5xl font-bold pt-8'>About Me</h1>
        <div class='flex flex-row'>
          <div class="w-1/3 p-6">
            <img src="" alt='Image'></img>
          </div>
          <div class="w-2/3 p-6 pr-6 text-justify text-gray-300">Hey! My Name is Aneesah Sabar with a deep passion to for Artificial Intelligence and Natural Language Processing. 
            I am currently a 3rd Year Undergraduate at the University of Moratuwa, Sri Lanka pursuing a degree in BSc (Hons) in Artificial Intelligence.
             I aspire toward a career that will allow me to channel my creativity and innovation through exploring new areas to research & experiment
              in AI.</div>
        </div>
      </div>

      {/*Education section*/}
      <div classname="education">
      <h1 class='bg-[linear-gradient(90deg,_#3F8E9D_30%,_#8F40D8_60%)] bg-clip-text text-transparent text-center text-5xl font-bold py-8'>
        Education</h1>

        <div class='flex flex-row'>
          <div class='w-1/3 border-2 border-[#3F8E9D] rounded-lg m-4'>
          <div class='text-right text-gray-200 p-5'>
          2020-Present
          </div>
          <div class='text-left text-gray-100 text-xl text-bold p-5'>
          University of Moratuwa, Katubedda
          </div>
          <div class='text-left text-gray-400 px-5 pb-8'>
          Currently a 3rd Year Undergraduate pursuing the degree BSc (Hons) in Artificial Intelligence. 
          </div>
          </div>

          <div class='w-1/3 border-2 border-[#3F8E9D] rounded-lg m-4'>
          <div class='text-right text-gray-200 p-5'>
          2018-2020
          </div>
          <div class='text-left text-gray-100 text-xl text-bold p-5'>
          Ave Maria Convent, Negombo
          </div>
          <div class='text-left text-gray-400 px-5 pb-8'>
          Did my A/Ls (English Medium) in the Physical Science Stream and achieved
          A for Maths, B for Physics and B for Chemistry.
          </div>
          </div>

          <div class='w-1/3 border-2 border-[#3F8E9D] rounded-lg m-4'>
          <div class='text-right text-gray-200 p-5'>
          2007-2018
          </div>
          <div class='text-left text-gray-100 text-xl text-bold p-5'>
          Sailan International School, Seeduwa
          </div>
          <div class='text-left text-gray-400 px-5 pb-8'>
          Received my primary education at Sailan International School. 
          Received 9As for the O/Ls including for subjects Business Studies & English Literature.          
          </div>
        </div>
      </div>
      </div>
      
      {/*Projects section*/}
      <div classname="projects">
      <h1 class='bg-[linear-gradient(90deg,_#3F8E9D_30%,_#8F40D8_60%)] bg-clip-text text-transparent text-center text-5xl font-bold py-12'>
      Projects
      </h1>
      <div class='flex flex-row'>
        <div class='w-1/2 border-2 border-[#3F8E9D] rounded-lg m-8'>
        <div class='text-left text-gray-100 text-2xl text-bold px-5 pt-8 pb-2'>
          Automated Indoor Gardening System
        </div>
        <div class='text-left text-gray-400 text-small px-5 pb-2'>First Year Software Project</div>
        <div class='text-left text-gray-100 px-5'>
        The system is an automated indoor gardening system that assists indoor gardening with features such as 
        automated watering, disease detection, humidity checking, automated fertilizing of the plant.
        </div>
        <div class='text-left text-gray-400 text-small p-5 pb-5'>Technologies: Arduino, Python</div>
        </div>

        <div class='w-1/2 border-2 border-[#3F8E9D] rounded-lg m-8'>
        <div class='text-left text-gray-100 text-2xl text-bold px-5 pt-8 pb-2'>
          RAG-Based Chatbot
        </div>
        <div class='text-left text-gray-400 text-small px-5 pb-2'>Personal Project</div>
        <div class='text-left text-gray-100 px-5'>
        Currently developing a chatbot using Retrieval-Augmented Generation (RAG) to provide intelligent
         responses based on user queries from documents.
        </div>
        <div class='text-left text-gray-400 text-small p-5 pb-5'>Technologies: React JS, Material UI, Python, Llama, ChromaDB</div>
        </div>
        </div>

      <div class='flex flex-row'>
        <div class='w-1/2 border-2 border-[#3F8E9D] rounded-lg m-8'></div>
        <div class='w-1/2 border-2 border-[#3F8E9D] rounded-lg m-8'></div>
        </div>
      </div>
      </div>
  );
};

export default About;
