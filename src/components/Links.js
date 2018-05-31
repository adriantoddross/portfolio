import React from 'react';

export default function Links(props) {
  return(
    <div className='links-container'>
      <ul className="links">
        <li>
          <a className='github' href="https://github.com/adriantoddross" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
        <li>
          <a className='linkedin' href="https://www.linkedin.com/in/adriantross/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}