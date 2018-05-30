import React from 'react';

export default function Project(props) {
  return (
    <div>
      <div>
        <img src={props.image} alt=""/>
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a className='project-link' href={props.link}>Live Demo</a>
    </div>
  );
}

Project.defaultProps = {
  image: '',
  title: 'Project coming soon!',
  description: "This project isn't finished yet, but will be added soon!",
  link: ''
}