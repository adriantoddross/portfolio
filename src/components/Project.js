import React from 'react';

export default function Project(props) {
  return (
    <div className={props.title}>
      <div className='project-image-container'>
        <img className='project-image' src={props.image} alt="null"/>
      </div>
      <h2 className='project-title'>{props.title}</h2>
      <p className='project-desc'>{props.description}</p>
      <p className='project-stack'>	&#x2014; {props.stack}</p>
      <a className='project-repo' href={props.repo}>Github Repo</a>
      <a className='project-link' href={props.link}>Live Demo</a>
    </div>
  );
}

Project.defaultProps = {
  image: 'https://res.cloudinary.com/adriantoddross/image/upload/v1526329107/100px_map_icon_traffic_construction.png',
  title: 'Under Construction',
  description: "This project isn't finished yet but it'll be added soon!",
  repo: 'https://github.com/adriantoddross',
  link: 'https://github.com/adriantoddross'
}