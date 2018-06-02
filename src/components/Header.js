import React, {Component} from 'react';

export default function Header(props) {

  const blurbs = [
    'I use tabs, not spaces, just so you know.',
    'Sometimes Javascript makes me go "Screw this!" but then I forget what "this" refers to.',
    'Who do you think delivers more packages? Amazon or NPM?',
    'What part of the bathroom can handle water concurrently? Async!',
    'Sometimes I\'m a little grumpy until I\'ve had my 12,648,430.',
    'Why did the programmer quit his job? Because he didn\'t get arrays. *Badum tsss!*',
    ' How do you comfort a JavaScript bug? You console it.',
    'Studies show that the most used language in programming in 2018 is... profanity. Oops!'
  ];

  const randomIndex = Math.floor(Math.random() * blurbs.length);
  const randomString = blurbs[randomIndex];

  return (
    <div>
      <nav>
        <ul className='skip-nav'>
          <a href='#joke'>Hear a joke</a>
          <a href='#about'>Learn about me</a>
          <a href='#contact'>Contact me</a>
          <a href='#portfolio'>Skip to my portfolio</a>
          <a href='#footer'>Read footer attribution</a>
        </ul>
      </nav>
      <header id='joke' className="banner" role='banner'>
        <h1>
        {randomString}
        </h1>
      </header>
    </div>
  );
}