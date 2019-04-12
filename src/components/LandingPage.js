import React from 'react';
import Logo from '../logo.svg';

export default function LandingPage(props) {
  return (
    <div>
      <div>
        <img src={Logo} alt="null"/>
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
      <div>
        <h2>I create websites and apps that are optimized for branding and inbound marketing.</h2>
        <div></div>
        <p>Your website or app should function as a digital marketing funnel, uplifted by pillars of content like videos, blog posts, or episodes of a podcast. I give you all the tools needed to share content that benefits your customers and establish the rapport needed to see results from calls-to-action that benefit your business.</p>
      </div>
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
      <footer>
        <div>
          <h3>Say what's up.</h3>
          <ul>
            <li><a href="tel:+14042107154">404-210-7154</a></li>
            <li><a href="mailto:adriantoddross@gmail.com">adriantoddross@gmail.com</a></li>
            <li><a href="https://www.instagram.com/adriantoddross/" target="_blank" rel="noopener noreferrer">@adriantoddross</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}