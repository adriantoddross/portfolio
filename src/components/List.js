import React from 'react';
import Project from './Project';
import Portfolio from '../Projects';

export default function List(props) {
  // const portfolio = [
  //   {}
  // ];

  const projects = Portfolio.map(project =>
    <li key={project.title}>
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