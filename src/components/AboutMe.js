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
          I'm a jr. web developer and graphic designer with experience building and deploying mobile and web apps. I'm comfortable working collaboratively through pair programming, as part of a team, or solo. I mostly work with Javascript, Node.js and React, but also create Squarespace and Wordpress sites.
          </p>
        </section>
          <p>
            I value balance and perspective, keep it real, and treat everyone how I'd like to be treated. I'm independent, comfortable in my own skin, and live happily outside of the norm. I care a lot about doing what's best for the user and creating user experiences that are inclusive and accessible.
          </p>
        <section>
        <h2 className='section-header'>About Me</h2>
          <p className='contact'>
            I'm a freelancer at heart, but am currently looking for a full-time role. I'd love the chance to work alongside (and be mentored by) a diverse team of awesome developers. Feel free to <a
            className='email' href="mailto:adriantoddross@gmail.com">email me</a> with any opportunties.
          </p>
        </section>
      </div>
  );
}