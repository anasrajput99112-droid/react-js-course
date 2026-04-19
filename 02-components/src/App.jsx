import React from 'react'
import header from './components/header.jsx'
import hero from './components/hero.jsx'
import footer from './components/footer.jsx'


const App = () => {
  return (
    <div>
      {header()}
      {hero()}
      {footer()}
    </div>
  )
}

export default App
