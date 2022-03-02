import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from './context/auth.context';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import { LoadPageWrapper } from './context/loadPage.context';

ReactDOM.render(
  <Router>
    <AuthProviderWrapper>
      <LoadPageWrapper>
        <App />
      </LoadPageWrapper>
    </AuthProviderWrapper>
  </Router>,
  document.getElementById('root')
)