import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderText({ text, link }) {
  return (
    <Link to={link} className="menu-text-hover">{text}</Link>
  )
}