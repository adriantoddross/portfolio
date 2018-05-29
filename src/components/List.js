import React from 'react';
import Project from './Project';

export default function List(props) {
  const portfolio = [
    {}
  ];

  const projects = portfolio.map(project =>
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