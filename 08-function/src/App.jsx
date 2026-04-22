import React from 'react'

const App = () => {

  function onScroll(){
    console.log('scroll');
    
  }

  return (
    <div onWheel={onScroll}>
     <div className="page1"></div>
     <div className="page2"></div>
     <div className="page3"></div>
    </div>
  )
}

export default App
