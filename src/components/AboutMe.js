import React from 'react';

export default function AboutMe(props) {
  return (
    <div>
      <div className='separator'>
        <section className='about'>
          <p className='intro'>
            Hey there! I'm <b>Adrian</b>, a full stack developer and graphic designer living in Atlanta, Georgia.
          </p>
          <p className='experience'>
            I have experience building and deploying web apps and working collaboratively through pair programming and alongside project teams. I mostly work with NodeJS and React JS, using tools like Travis CI, Heroku and Netlify for testing and deployment. I care a lot about accessibility, semantic code, and user experience.
          </p>
          {/* <p>
            I spend my free time playing video games, listening to podcasts, and enjoying the company of my wife (and my fur babies!). I dabble in a lot of creative hobbies like audio engineering, recording & producing music, and streaming video games.
          </p> */}
          <p className='contact'>
            Currently, I'm looking for a full-time job. Feel free to <a
            className='email' href="mailto:adriantoddross@gmail.com">email me</a> with any opportunties.
          </p>
        </section>
      </div>
    </div>
  );
}