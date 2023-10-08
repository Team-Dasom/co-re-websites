import React from 'react';
import Header from './components/Header/Header';
import './style/globals.css';
import StartPage from './components/StartPage';

export default function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <StartPage />
    </div>
  );
}
