import React from 'react'
import ReactDOM from 'react-dom/client'
import Board from './components/Board'

//隨機random位置
import { observe } from "./components/Game"

import "./basic.css" 

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Board knightPosition={[7, 4]} />
// )

observe((knightPosition) => 
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Board knightPosition={knightPosition} />
  )
)