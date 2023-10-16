import React from 'react';
import 'style/globals.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from 'router';

export default function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
