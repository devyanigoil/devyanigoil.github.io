import React, { useState, useEffect } from "react";
import './HomePage.css'; // CSS file for styles

const HomePage = () => {
  const [text, setText] = useState(""); // The text that is typed out
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // The current character index
  const [isDeleting, setIsDeleting] = useState(false); // A flag to track deleting text
  const [currentPhrase, setCurrentPhrase] = useState("Software Developer"); // The current phrase being typed/deleted
  const [cursorVisible, setCursorVisible] = useState(true); // A flag to control the cursor visibility

  const phrases = [
    "Software Engineer",
    "CS Masters Student",
    "Technology Enthusiast",
  ];

  const typingSpeed = 100;
  const deletingSpeed = 100;
  const switchDelay = 2000; // Delay before starting to delete

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isDeleting) {
        // Deleting the text
        setText((prev) => prev.slice(0, prev.length - 1)); // Remove one character
        setCurrentTextIndex((prev) => prev - 1); // Update index
      } else {
        if (currentTextIndex < currentPhrase.length) {
          // Typing the text (only if the index is within the length of the phrase)
          setText((prev) => prev + currentPhrase[currentTextIndex]); // Add one character
          setCurrentTextIndex((prev) => prev + 1); // Update index
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    // Once a phrase is fully typed, start deleting after a delay
    if (!isDeleting && currentTextIndex === currentPhrase.length) {
      setTimeout(() => {
        setIsDeleting(true); // Start deleting
      }, switchDelay);
    }

    // Once deleting is done, switch to the next phrase
    if (isDeleting && currentTextIndex === 0) {
      const nextPhraseIndex = (phrases.indexOf(currentPhrase) + 1) % phrases.length;
      setCurrentPhrase(phrases[nextPhraseIndex]); // Switch to the next phrase
      setIsDeleting(false); // Stop deleting
    }

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentTextIndex, isDeleting, currentPhrase]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev); // Toggle cursor visibility
    }, 200);

    return () => clearInterval(cursorInterval); // Cleanup the cursor interval
  }, []);

  return (
    <div className="homepage">
      <h1>Hi! </h1>
      <h1>I'm Devyani</h1>
      <h2>
        I am a <span>{text}</span>
        {cursorVisible && <span className="cursor">|</span>} {/* Cursor */}
      </h2>
    </div>
  );
};

export default HomePage;
