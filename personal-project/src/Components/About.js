import React, { useState } from 'react';
import image from '../assets/image.png';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-start flex-col m-12">
      {/*Top Section*/}
      <div class='w-2/3 mb-8'>
      <div class='text-gray-300 text-left px-16'>  Hi, My name is</div>
      <h1 class='bg-[linear-gradient(90deg,_#3F8E9D_10%,_#8F40D8_40%)] bg-clip-text text-transparent text-left text-7xl font-bold px-16 py-4'>
             Aneesah Sabar</h1> {/* Directly use the <h1> tag */}
      <div class='text-gray-400 text-left px-16 text-3xl font-medium p-2'>“Exploring the Future of AI, NLP, and LLMs, One Innovation at a Time!"</div>
      <div class="text-gray-500 text-left px-16 text-lg">I am a 3rd Year Artificial Intelligence Undergraduate curious in learning new technologies related AI, Data Science, and NLP.</div>
      </div>
      <div class="w-1/3">
      </div>
      <hr className="border-t-2 border-gray-800 my-8" />


      {/*About me section*/}
      <section id="aboutme" >
      <h1 className='bg-[linear-gradient(90deg,_#3F8E9D_30%,_#8F40D8_60%)] bg-clip-text text-transparent text-center text-5xl font-bold pt-16'>
            About Me
      </h1>     
      <div className="flex items-center pb-12">
      <div className="flex items-center space-x-12">
        {/* Image Section */}
        <div className="w-1/3 flex items-center justify-center">
          <img src={image} alt="Image" className="w-64"></img>
        </div>

        {/* Text Section */}
        <div className="w-2/3 text-gray-400 text-justify pr-12">
          <p>
             I am currently a 3rd Year
            Undergraduate at the University of Moratuwa, Sri Lanka, pursuing a
            degree in BSc (Hons) in Artificial Intelligence. I am an Undergraduate with a deep passion for Artificial
            Intelligence and Natural Language Processing. I aspire toward a
            career that will allow me to channel my creativity and innovation
            through exploring new areas to research & experiment in AI.
          </p>
          <br></br>
          <p>
            I am an individual with a solid foundation in leadership, effective communication, and problem-solving abilities. 
            My experiences have not only strengthened my skills but have also fueled my passion for engaging in volunteer work. 
            I find great fulfillment in participating in socially impactful projects that aim to make a difference in the community. 
            Whether it’s collaborating with diverse teams or addressing complex challenges, I thrive on opportunities that allow me 
            to contribute positively and support initiatives that benefit others.
          </p>  
        </div>
        </div>
        </div>
      </section>

      <hr className="border-t-2 border-gray-800 my-8" />

      {/*Education section*/}
      <section id="education" class='pb-12'>
      <h1 class='bg-[linear-gradient(90deg,_#3F8E9D_30%,_#8F40D8_60%)] bg-clip-text text-transparent text-center text-5xl font-bold py-8 pt-16'>
        Education</h1>

        <div class='flex flex-row'>
          <div class='w-1/3 border-2 border-[#3F8E9D] rounded-lg m-4 p-5'>
          <div class='text-right text-gray-200 p-5'>
          2020-Present
          </div>
          <div class='text-left text-gray-100 text-xl text-bold p-5'>
          University of Moratuwa, Katubedda
          </div>
          <div class='text-left text-gray-400 px-5 pb-8'>
          Currently a 3rd Year Undergraduate pursuing the degree BSc (Hons) in Artificial Intelligence. 
          Building foundational skills of AI concepts and Information Technologies.
          </div>
          </div>

          <div class='w-1/3 border-2 border-[#3F8E9D] rounded-lg m-4 p-5'>
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

          <div class='w-1/3 border-2 border-[#3F8E9D] rounded-lg m-4 p-5'>
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
      </section>

      <hr className="border-t-2 border-gray-800 my-8" />
      
      {/*Projects section*/}
      <section id="projects" class='pb-12'>
      <h1 class='bg-[linear-gradient(90deg,_#3F8E9D_30%,_#8F40D8_60%)] bg-clip-text text-transparent text-center text-5xl font-bold py-12 pt-16'>
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
        <div class='w-1/2 border-2 border-[#3F8E9D] rounded-lg m-8'>
        <div class='text-left text-gray-100 text-2xl text-bold px-5 pt-8 pb-2'>
          AI-Powered Student Learning System
        </div>
        <div class='text-left text-gray-400 text-small px-5 pb-2'>Second Year Software Project</div>
        <div class='text-left text-gray-100 px-5'>
        Currently developing a chatbot using Retrieval-Augmented Generation (RAG) to provide intelligent
         responses based on user queries from documents.
        </div>
        <div class='text-left text-gray-400 text-small p-5 pb-8'>Technologies: React JS, Material UI, Python, Llama, ChromaDB</div>
        </div>

        <div class='w-1/2 border-2 border-[#3F8E9D] rounded-lg m-8'>
        <div class='text-left text-gray-100 text-2xl text-bold px-5 pt-8 pb-2'>
        RIBA (Royal Institute of British Architecture) Project      
        </div>
        <div class='text-left text-gray-400 text-small px-5 pb-2'>DevLabs -  Project</div>
        <div class='text-left text-gray-100 px-5'>
        Worked as a member of the Business Analyst team. Documented the work process and assisted in project management of the project
        </div>
        <div class='text-left text-gray-400 text-small p-5 pb-8'>Technologies: Jira</div>
        </div>
        </div>
      </section>
      <hr className="border-t-2 border-gray-800 my-8" />
      </div>
  );
};

export default About;
