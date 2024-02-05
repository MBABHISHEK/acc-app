// CardReplication.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';// Import Tailwind CSS
import TechnologyImageData from '../data/TechnologyData.js'; // Import Tailwind CSS

const CardReplication = () => {
  const [addedImages, setAddedImages] = useState([]);
  const [headerContent, setHeaderContent] = useState('Header Content');

  const replicateImage = (image, text) => {
    const newImage = image.cloneNode(true);
    newImage.classList.remove('replicatedCard');

    // Adjust the width and height of the cloned image
    newImage.style.width = '30px'; // Set the desired width
    newImage.style.height = '45px'; // Set the desired height

    // Update state to include the new image
    setAddedImages((prevImages) => [...prevImages, { alt: newImage.alt, src: newImage.src }]);

    // Create speech synthesis
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Play speech
    synth.speak(utterance);
  };

  const playSpeech = () => {
    let concatenatedText = '';

    // Concatenate alt text of added images
    addedImages.forEach((image) => {
      concatenatedText += image.alt + ' ';
    });

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(concatenatedText.trim());

    // Play speech
    synth.speak(utterance);
  };

  const updateHeaderContent = () => {
    // You can set the header content dynamically based on your requirements
    setHeaderContent('Updated Header Content');
  };

  return (
    <div
      className="flex flex-col items-center"
      style={{
        background: 'linear-gradient(to right, #4f74c0, #354f82)', // Set your desired gradient colors
      }}
    >
      <div className="bg-gray-800 text-white p-4 w-full text-center cursor-pointer flex justify-between" id="header">
        {headerContent}
        <button onClick={playSpeech}>Play</button>
        <button onClick={updateHeaderContent}>Update Header</button>
        <div id="headerContainer" className="flex">
          {/* Render added images dynamically */}
          {addedImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="replicatedCard m-2 transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{ width: '75px', height: '75px' }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-4" id="cardContainer">
        {/* Add 5 image elements with different sources */}
        <img
          className="replicatedCard m-4 w-40 h-60 border border-black rounded cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
          src="../src/assets/food/apple.png"
          alt="Apple"
          onClick={(e) => replicateImage(e.target, 'Apple')}
        />
        <img
          className="replicatedCard m-4 w-40 h-60 border border-black rounded cursor-pointer
          transition-transform transform hover:scale-105 hover:shadow-lg"
          src={TechnologyImageData[0].src}
          alt="Banana"
          onClick={(e) => replicateImage(e.target, 'Banana')}
        />
        <img
          className="replicatedCard m-4 w-40 h-60 border border-black rounded cursor-pointer
          transition-transform transform hover:scale-105 hover:shadow-lg"
          src="food/bread.png"
          alt="Bread"
          onClick={(e) => replicateImage(e.target, 'Bread')}
        />
        <img
          className="replicatedCard m-4 w-40 h-60 border border-black rounded cursor-pointer
          transition-transform transform hover:scale-105 hover:shadow-lg"
          src="food/cake.png"
          alt="Cake"
          onClick={(e) => replicateImage(e.target, 'Cake')}
        />
        <img
          className="replicatedCard m-4 w-40 h-60 border border-black rounded cursor-pointer
          transition-transform transform hover:scale-105 hover:shadow-lg"
          src="food/chocolate.png"
          alt="Chocolate"
          onClick={(e) => replicateImage(e.target, 'Chocolate')}
        />
      </div>
    </div>
  );
};

export default CardReplication;
