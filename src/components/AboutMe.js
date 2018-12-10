import React from 'react';

export default function AboutMe(props) {
  return (
    <div id='about'>
        <h1 className='section-header'>Adrian Ross: Web Developer & Graphic Designer</h1>
        {/* <section className='about'>
          <h2 className='section-header'>About Me</h2>
          <p className='intro'>
            Hi! I'm <b>Adrian</b>, a full stack Javascript developer and graphic designer living in Atlanta, Georgia.
          </p>
        </section> */}
        <section>
        <h2 className='section-header'>Experience</h2>
          <p className='experience'>
            I'm a junior developer with experience building and deploying web apps and working collaboratively through pair programming or as part of a team. I work with Javascript, Node.js and React, using tools like Travis CI, Heroku and Netlify for deployment and CICD. 
          </p>
        </section>
          <p>
            I spend my free time playing video games, listening to podcasts, and spoiling my cat. I dabble in a lot of nerdy and creative hobbies like tabletop gaming and making music.
          </p>
        <section>
        <h2 className='section-header'>About Me</h2>
          <p className='contact'>
            Currently, I'm looking for a full-time role and I'd love the chance to work alongside (and be mentored by) a diverse team of awesome developers. Feel free to <a
            className='email' href="mailto:adriantoddross@gmail.com">email me</a> with any opportunties.
          </p>
        </section>
      </div>
  );
}