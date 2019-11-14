import React, {Component} from 'react';

export default class Header extends Component {

  componentDidMount() {
    document.getElementById('header').focus(); // Give focus to the first nav element so the skip nav is not accidentally skipped.
  }

  render() {
    return (
      <div>
        <nav className='skip-nav'>
          <a href='#header'>Read header</a>
          <a href='#about'>Skip to learn about me</a>
          <a href='#contact'>Skip to contact links</a>
          <a href='#portfolio'>Skip to my portfolio</a>
          <a href='#footer'>Skip to footer attribution</a>
        </nav>
        <header id='header' className="banner" role='banner'>
          <h1>
            Yo! I'm <span className='name'>Adrian Ross</span>, a web developer and graphic designer in Atlanta, Georgia.
          </h1>
        </header>
      </div>
    );
  }
}