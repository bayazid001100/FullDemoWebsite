import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='get-in-touch'>
      <button className='btn'>Get In Touch</button>
    </Link>
  );
}
