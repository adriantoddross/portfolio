import React from 'react';

export default function Project(props) {
  const projectName = props.title;

  const repoLink = (props.repo) ? <a className='project-repo' href={props.repo}>Github Repo</a> : null;
  // Omit the repo link if the project doesn't have one.

  const projectLink = (props.category === 'website') ? <a className='project-link' href={props.link}>View Website</a> : <a className='project-link' href={props.link}>Live Demo</a>;
  /* Render 'view website' for website, and 'live demo' for apps.
  * In the future, this could be a function that return various link titles
  * with returns based on if or switch statements
  */

  return (
    <div className={`${projectName} project-container`}>
      <img className='project-image' src={props.image} alt="null"/>
      <div className='project-info'>
        <div className='project-half1'>
          <h2 className='project-title'>{props.title}</h2>
          <p className='project-desc'>{props.description}</p>
        </div>
        <div className='project-half2'>
          <h2 className='project-stack-title'>Development Stack</h2>
          <p className='project-stack'>{props.stack}</p>
          {projectLink}
          {repoLink}
        </div>
      </div>
    </div>
  );
}

Project.defaultProps = {
  image: 'https://res.cloudinary.com/adriantoddross/image/upload/v1526329107/100px_map_icon_traffic_construction.png',
  title: 'Under Construction',
  description: 'This project isn\'t finished yet but it\'ll be added soon!',
  // repo: 'https://github.com/adriantoddross',
  // link: 'https://github.com/adriantoddross'
};