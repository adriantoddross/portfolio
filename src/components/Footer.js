import React from 'react';

export default function Footer(props) {
  return (
    <div className='footer-container'>
      <footer className='footer'>
        <div className='footer-img-container'>
          <img className='footer-img' src="https://res.cloudinary.com/adriantoddross/image/upload/v1527785141/adrian-ross.png" alt="null"/>
        </div>
        <p>
          Designed and developed by Adrian, <span className='attribution'>inspired by <a className='attribution' href="https://praneshravi.in/" target="_blank" rel="noopener noreferrer">Pranesh Ravi</a>.</span>
        </p>
        <p>
          Hosted on Github Pages. Code is licensed under MIT and available on Github. All images and graphics are licensed under CC BY-SA.
        </p>
        <p>
          © 2018 Adrian Ross
        </p>
      </footer>
    </div>
  );
}