import React from 'react';

export default function Footer(props) {
  return (
    <div className='footer-container'>
      <footer className='footer'>
        <div className='footer-img-container'>
          <img className='footer-img' src="https://res.cloudinary.com/adriantoddross/image/upload/v1527785141/adrian-ross.png" alt="null"/>
        </div>
        <p>
          Designed and developed by Adrian, <span className='attribution'>inspired by Pranesh Ravi. <a href="https://praneshravi.in/" target="_blank" rel="noopener noreferrer"></a></span>
        </p>
        <p>
          Hosted on Github Pages.
        </p>
        <p>
          © 2018 Adrian Ross
        </p>
      </footer>
    </div>
  );
}