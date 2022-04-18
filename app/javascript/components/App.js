import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

const App = () => {
  return (
  <Switch>
    <Route exact path="/" component={Airlines}/>
    <Route exact path="/airlines/:slug" component={Airline} />
  </Switch>)
  // To show individual airlines like a traditional show page
  // - on react you can pass a param on the url
  // To keep things consistent we will pass our slugified name
  // return (<div><h1>Hello World</h1></div>)
}

export default App
