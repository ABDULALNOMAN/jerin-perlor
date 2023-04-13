import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Contexting from './Component/Contexting/Contexting'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Contexting>
        <App />
      </Contexting>
  </React.StrictMode>
)
