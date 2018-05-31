import React from 'react';
import Project from './Project';
import Portfolio from '../Projects';

export default function List(props) {

  const projects = Portfolio.map(project =>
    <li key={project.title} className='project'>
      <Project image={project.image} title={project.title} stack={project.stack} description={project.description} repo={project.repo} link={project.link}/>
    </li>
  );

  return (
    <div className='projects-container'>
      <ul className='project-list'>
        {projects}
      </ul>
    </div>
  );
}