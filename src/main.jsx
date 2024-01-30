import React from 'react'
import ReactDOM from 'react-dom/client'
import Knight from './components/Knight'
import Square from './components/Square'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Square black>
    <Knight />
  </Square>
)
