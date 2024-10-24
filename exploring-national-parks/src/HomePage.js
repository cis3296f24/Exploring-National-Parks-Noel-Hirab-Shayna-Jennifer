/**
 * Renders the home page of the application.
 * @component
 * @module HomePage
 * @returns {JSX.Element} The rendered home page component.
 */
import React, { useEffect } from 'react';
import Welcome from './HomePage/Components/Welcome';
import Buttons from './HomePage/Components/Buttons';
import HighlightGallery from './HomePage/Components/HighlightGallery';
import './Style/homepage.css';

const HomePage = () => {
  // Add useEffect to load Twitter script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="home-page main-component">
      <Welcome />
      <HighlightGallery />
      <Buttons />
      
      {/* Twitter Timeline Embed */}
      <div style={{ marginTop: '20px' }}>
        <a
          className="twitter-timeline"
          href="https://twitter.com/TheTempleNews?ref_src=twsrc%5Etfw"
        >
          Tweets by TheTempleNews
        </a>
      </div>
    </div>
  );
};

export default HomePage;
