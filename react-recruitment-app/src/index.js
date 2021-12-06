import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@chatui/core/es/styles/index.less';
import '@chatui/core/dist/index.css';

import {AppProviders} from "context";

ReactDOM.render(
  <React.StrictMode>
      <AppProviders>
          <App />
      </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);

