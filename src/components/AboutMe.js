import React from 'react';

export default function AboutMe(props) {
  return (
    <div id='about'>
        <h1 className='section-header'>Adrian Ross: Full Stack Web Developer & Graphic Designer</h1>
        {/* <section className='about'>
          <h2 className='section-header'>About Me</h2>
          <p className='intro'>
            Hi! I'm <b>Adrian</b>, a full stack Javascript developer and graphic designer living in Atlanta, Georgia.
          </p>
        </section> */}
        <section>
        <h2 className='section-header'>Experience</h2>
          <p className='experience'>
          I'm a full-stack web developer and graphic designer specializing in responsive web design and accessibility. I'm currently looking for a full-time or contract position as a software engineer or web developer in Atlanta, GA.
          </p>
        </section>
          <p>
          I graduated from Thinkful's Engineering Immersion program in June 2018 and have experience designing, developing and deploying full-stack mobile and web apps. I'm comfortable working collaboratively through pair programming, as part of a team, or solo.
          </p>
        <section>
        <h2 className='section-header'>About Me</h2>
          <p className='contact'>
          I mostly work with Javascript, MongoDB, Express.js, React, and Node.js, but also design and develop Squarespace and Wordpress sites as a freelancer and as a web designer at <a href="https://www.moderndaydigital.com/" target="_blank" rel="noopener noreferrer">Modern Day Digital</a>. I'd love the chance to work anywhere alongside (and be mentored by) a diverse team of awesome developers.
          </p>
        </section>
      </div>
  );
}