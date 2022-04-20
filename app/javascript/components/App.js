// For react router dom to work you need to either downgrade the react-router-dom
// - to version 5.2.0 or use keyword {Routes, Route} following ver 6 syntax
// https://exerror.com/attempted-import-error-switch-is-not-exported-from-react-router-dom/


import React from 'react'
// import { Route, Switch } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

const App = () => {
  return (
    <div>Message from APP</div>
  // <Router>
  //   <Routes>
  //     <Route exact path="/" component={Airlines}/>
  //     <Route exact path="/airlines/:slug" component={Airline}/>
  //   </Routes>
  // </Router>
  )
  // To show individual airlines like a traditional show page
  // - on react you can pass a param on the url
  // To keep things consistent we will pass our slugified name
  // return (<div><h1>Hello World</h1></div>)
}

export default App
