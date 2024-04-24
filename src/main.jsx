import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Text from './Text.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Scroll from './Scroll.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Scroll/>
    {/* <Text/> */}
  </React.StrictMode>,
)
