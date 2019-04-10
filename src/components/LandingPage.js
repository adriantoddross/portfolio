import React from 'react';

export default function LandingPage(props) {
  return (
    <div>
      <div>
        <img src="" alt=""/>
        <header>
          <p><strong>Adrian Ross</strong> is a web developer and graphic designer in Atlanta, GA.</p>
          <nav>
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">View Selected Work</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Contact Me</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div></div>
      <body>
        <div>
          <h3>Selected Clients</h3>
          <ul>
            <li><a href="https://www.icmgeorgia.org/" target="_blank" rel="noopener noreferrer">Interfaith Children's Movement</a></li>
            <li><a href="https://www.goldmaneagle.com/" target="_blank" rel="noopener noreferrer">Goldman Eagle Advertising</a></li>
            <li><a href="https://the-obsidian.sharetribe.com/" target="_blank" rel="noopener noreferrer">The Obsidian</a></li>
          </ul>
        </div>
        <div>
          <h3>Preferred Tools</h3>
          <ul>
            <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></li>
            <li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
            <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express.js</a></li>
            <li><a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a></li>
            <li><a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgresQL</a></li>
          </ul>
        </div>
      </body>
    </div>
  );
}