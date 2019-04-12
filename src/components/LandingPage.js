import React from 'react';
import Logo from '../logo.svg';

export default function LandingPage(props) {
  return (
    <div>
      <div>
        <img src={Logo} alt="null"/>
        <header>
          <p><strong>Adrian Ross</strong> is a jr. web developer and graphic designer in Atlanta, GA.</p>
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
          <hr/>
        </header>
      </div>
      <div></div>
      <div>
        <h2>I create websites and apps that are optimized for branding and inbound marketing.</h2>
        <hr/>
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
        <div>
          <img src="" alt=""/>
          <h3>I use design sprints to provide you with 20/20 foresight.</h3>
          <hr/>
          <p>Design sprints allow me to fail quickly and understand the problems I'm trying to solve without wasting valuable time and resources. The prototype created from this process can be used for user testing and presentations before doubling down on a project, MVP, or proof-of-concept.</p>
        </div>
        <div>
          <img src="" alt=""/>
          <h3>Short times to completion backed up by long-term support.</h3>
          <hr/>
          <p>To complete projects quickly, I carefully narrow down the scope of a project, enabling me to promptly prioritize and address issues throughout the development process. After our project is complete, I'm committed to improving it over time,providing technical support, consultation and updates for the project.</p>
        </div>
      </body>
      <footer>
        <hr/>
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