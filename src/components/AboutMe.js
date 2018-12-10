import React from 'react';

export default function AboutMe(props) {
  return (
    <div id='about'>
        <h1 className='section-header'>Adrian Ross: Full Stack Web Dev & Graphic Designer</h1>
        {/* <section className='about'>
          <h2 className='section-header'>About Me</h2>
          <p className='intro'>
            Hi! I'm <b>Adrian</b>, a full stack Javascript developer and graphic designer living in Atlanta, Georgia.
          </p>
        </section> */}
        <section>
        <h2 className='section-header'>Experience</h2>
          <p className='experience'>
            I have experience building and deploying web apps and working collaboratively through pair programming and as part of a team. I mostly work with Javascript, Express.js and React JS, using tools like Travis CI, Heroku and Netlify for deployment. 
          </p>
        </section>
          <p>
            I spend my free time playing video games, listening to podcasts, and spending time with my wife (and my cat!). I dabble in a lot of nerdy and creative hobbies like tabletop gaming and making music.
          </p>
        <section>
        <h2 className='section-header'>About Me</h2>
          <p className='contact'>
            Currently, I'm looking for a full-time role and I'd love the chance to work on a diverse team of awesome developers. Feel free to <a
            className='email' href="mailto:adriantoddross@gmail.com">email me</a> with any opportunties.
          </p>
        </section>
      </div>
  );
}