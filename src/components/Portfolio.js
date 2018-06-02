import React from 'react';
import About from './AboutMe';
import Links from './Links';
import Projects from './List';

export default function Portfolio(props) {
  return (
    <div>
      <main className='main-content' role='main'>
        <About/>
        <Links/>
        <Projects/>
      </main>
    </div>
  );
}