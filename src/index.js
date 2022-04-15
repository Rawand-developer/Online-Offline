import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import useLocalStorage from "./hooks/useLocalStorage";
import useNetworkStatus from "./hooks/useNetworkStatus";

export default function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  console.log(isDark);
  const status = useNetworkStatus();
  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <div className="container">
        <span className={`status ${status ? "online" : "offline"}`}>
          {status ? "Online" : "Offline"}
        </span>
      </div>
      <button className="button" onClick={() => setIsDark(!isDark)}></button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();