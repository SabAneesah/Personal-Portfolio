import React, { useState } from 'react';
import clang from '../assets/c-programming.png';
import html from '../assets/html-5.png';
import css3 from '../assets/css3.png';
import javascript from '../assets/javascript.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import tailwindcss from '../assets/tailwindcss.png';
import react from '../assets/react-native.png';
import materialui from '../assets/material-ui.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import nodejs from '../assets/nodejs.png';
import numpy from '../assets/numpy.png';
import pandas from '../assets/pandas.png';
import tensorflow from '../assets/tensorflow.png';
import figma from '../assets/figma.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import hackerrank from '../assets/hackerrank.png';
import medium from '../assets/medium.png';



const Technology = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    window.location.href = "mailto:aneesha13sabar@gmail.com?subject=Subject%20Here&body=Hello%20there!";
  };

  return (

    
    <div>
        <h1 class='bg-[linear-gradient(90deg,_#3F8E9D_30%,_#8F40D8_60%)] bg-clip-text text-transparent text-center text-5xl font-bold pt-8 pb-12'>
            Technologies</h1>

        <div className="flex justify-center items-center space-x-8">
            <img src={html} alt="Logo 1" className="w-20 h-20" />
            <img src={css3} alt="Logo 2" className="w-20 h-20" />
            <img src={javascript} alt="Logo 3" className="w-20 h-20" />
            <img src={python} alt="Logo 4" className="w-20 h-20" />
            <img src={clang} alt="Logo 4" className="w-20 h-20" />
            <img src={java} alt="Logo 4" className="w-20 h-20" />
        </div>

        <div className="flex justify-center items-center space-x-8">
            <img src={react} alt="Logo 1" className="w-20 h-20" />
            <img src={tailwindcss} alt="Logo 2" className="w-20 h-20" />
            <img src={materialui} alt="Logo 3" className="w-20 h-20" />
            <img src={nodejs} alt="Logo 4" className="w-20 h-20" />
         </div>

        <div className="flex justify-center items-center space-x-8">
            <img src={mongodb} alt="Logo 1" className="w-20 h-20" />
            <img src={mysql} alt="Logo 2" className="w-20 h-20" />
        </div>

        <div className="flex justify-center items-center space-x-8 pb-12">
            <img src={pandas} alt="Logo 1" className="w-20 h-20" />
            <img src={tensorflow} alt="Logo 2" className="w-20 h-20" />
            <img src={numpy} alt="Logo 2" className="w-20 h-20" />
            <img src={figma} alt="Logo 2" className="w-20 h-20" />
        </div>

        <div>
        <h1 class='bg-[linear-gradient(90deg,_#3F8E9D_30%,_#8F40D8_80%)] bg-clip-text text-transparent text-center text-5xl font-bold pt-8 pb-12'>
        Contact Me</h1>

        <div class='mx-16 border-2 border-[#537AAC] rounded-lg mb-8'>
            <div class='p-6 text-center text-gray-100 font-semibold text-4xl'>
            Get in Touch!
            </div>
            <div class='p-4 text-center text-gray-200 text-semibold text-lg'>
            Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
            </div>
            <button className="border-2 border-[#537AAC] text-[#537AAC] py-2 px-16 mb-8 mt-2 rounded hover:bg-[#537AAC] hover:text-white transition-colors duration-300" onClick={handleClick}>
              Mail me!
            </button>
        </div>
        </div>

        <div className="flex justify-center items-center space-x-8 pb-12">
            <img src={github} alt="Logo 1" className="w-20 h-20" />
            <img src={linkedin} alt="Logo 2" className="w-20 h-20" />
            <img src={hackerrank} alt="Logo 2" className="w-20 h-20" />
            <img src={medium} alt="Logo 2" className="w-20 h-20" />
        </div>
    </div>
);
};

export default Technology;