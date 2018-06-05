import React from 'react';

export default function AboutMe(props) {
  return (
    <div id='about'>
        <h1 className='section-header'>Adrian Ross: Full Stack Web Dev & Graphic Designer</h1>
        <section className='about'>
          <h2 className='section-header'>About Me</h2>
          <p className='intro'>
            Hi! I'm <b>Adrian</b>, a full stack Javascript developer and graphic designer living in Atlanta, Georgia.
          </p>
        </section>
        <section>
        <h2 className='section-header'>Experience</h2>
          <p className='experience'>
            I have experience building and deploying web apps and working collaboratively through pair programming and as part of a team. I mostly work with NodeJS and React JS, using tools like Travis CI, Heroku and Netlify for deployment. I care a lot about accessibility, usability, and inclusion.
          </p>
        </section>
          <p>
            I spend my free time playing video games, listening to podcasts, and enjoying the company of my wife (and my fur babies!). I dabble in a lot of creative hobbies like audio engineering, recording & producing music, and streaming video games.
          </p>
        <section>
        <h2 className='section-header'>About Me</h2>
          <p className='contact'>
            Currently, I'm looking for a full-time job and I'd love the chance to work on a diverse team of awesome developers. Feel free to <a
            className='email' href="mailto:adriantoddross@gmail.com">email me</a> with any opportunties.
          </p>
        </section>
      </div>
  );
}