import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
