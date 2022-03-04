import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { PostsWrapper } from './context/posts.context'

ReactDOM.render(
  <Router>
    <AuthProviderWrapper>
      <PostsWrapper>
        <App />
      </PostsWrapper>
    </AuthProviderWrapper>
  </Router>,
  document.getElementById('root')
)