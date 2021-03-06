import React from 'react';
import ReactDOM from 'react-dom';
import './css/pages/index.css';
import App from './App';
import { DataLayer } from "./components/DataLayer";
import reducer, { initialState } from "./lib/reducer";

ReactDOM.render(
  <React.StrictMode>
      <DataLayer initialState={initialState} reducer={reducer}>
        <App />
      </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
