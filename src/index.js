import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';

import { GlobalStyles } from 'components/GlobalStyle/GlobalStyle';
import { Normalize } from 'components/GlobalStyle/Normalize';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={Normalize} />
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
