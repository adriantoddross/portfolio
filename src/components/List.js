import React from 'react';
import Project from './Project';
import Portfolio from '../Projects';

export default function List(props) {

  const projects = Portfolio.map(project =>
    <li key={project.link}>
      <Project image={project.image} title={project.title} description={project.description} link={project.link}/>
    </li>
  );

  return (
    <div>
      <ul>
        {projects}
      </ul>
    </div>
  );
}