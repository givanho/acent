import React, { useEffect } from 'react';
import './google.css'
function GoogleTranslate() {
  useEffect(() => {
    if (window.google && window.google.translate) {
        // Initialize Google Translate element with desired options
        new window.google.translate.TranslateElement({
          pageLanguage: 'en', // Set the page language
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL, // Set layout option if needed
          gaTrack: true // Enable Google Analytics tracking if needed
        }, 'google_translate_element'); // Target element ID
      }
    }, []);
  
    
  
  return (
    <div className="nunito" id="google_translate_element"></div>
  );
}

export default GoogleTranslate;
