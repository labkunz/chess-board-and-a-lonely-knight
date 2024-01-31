import React from 'react'
import ReactDOM from 'react-dom/client'
import Board from './components/Board'

import "./basic.css" 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Board knightPosition={[7, 4]} />
)
