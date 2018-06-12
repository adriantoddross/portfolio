import React from 'react';

export default function Project(props) {
  const projectName = props.title;

  return (
    <div className={`${projectName} project-container`}>
      <img className='project-image' src={props.image} alt="null"/>
      <div className='project-info'>
        <div className='project-half1'>
          <h2 className='project-title'>{props.title}</h2>
          <p className='project-desc'>{props.description}</p>
          <a className='project-link' href={props.link}>Live Demo</a>
        </div>
        <div className='project-half2'>
          <h2 className='project-stack-title'>Development Stack</h2>
          <p className='project-stack'>{props.stack}</p>
          <a className='project-repo' href={props.repo}>Github Repo</a>
        </div>
      </div>
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