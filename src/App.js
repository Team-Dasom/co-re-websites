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

  function hideConsoleMessage(message) {
    const originalConsoleLog = console.log;
    console.log = function () {
      const args = Array.from(arguments);
      const logMessage = args.join(' ');
      if (!logMessage.includes(message)) {
        originalConsoleLog.apply(console, args);
      }
    };
  }
  hideConsoleMessage("Element previously highlighted. To highlight again, first unset `dataset.highlighted`","WARN:");
  hideConsoleMessage("WARN:");
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
