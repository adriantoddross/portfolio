import React from 'react';

export default function Project(props) {
  return (
    <div>
      <div>
        <img className='project-image' src={props.image} alt="null"/>
      </div>
      <h2 className='project-title'>{props.title}</h2>
      <p className='project-desc'>{props.description}</p>
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