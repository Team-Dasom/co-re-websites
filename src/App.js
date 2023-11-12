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

  // 에러 메시지가 특정 패턴과 일치하는지 확인하는 함수
function isNonSerializableError(error) {
  return error.message.startsWith("A non-serializable value was detected in an action");
}

// 에러 이벤트를 감지하여 특정 조건일 때 콘솔에 출력하지 않음
window.addEventListener('error', function (event) {
  if (isNonSerializableError(event.error)) {
    // 특정 에러 메시지일 경우 아무 작업도 수행하지 않음
    // 즉, 콘솔에 에러를 표시하지 않음
    event.preventDefault();
  }
});
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
