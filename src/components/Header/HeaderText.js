import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HeaderText({ text, link }) {
  
  return (
    <NavLink to={link} className='menu-text-hover'>{text}</NavLink>
  )
}