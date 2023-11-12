import React from 'react';
import 'style/globals.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from 'router';

export default function App() {
  // if (process.env.NODE_ENV === 'production') {
  //   console = window.console || {};
  //   console.log = function no_console() {};
  //   console.warn = function no_console() {};
  //   console.error = function () {};
  // }
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
