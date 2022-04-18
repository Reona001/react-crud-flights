// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

//React 18 syntax guide: https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18

import React from 'react'
import ReactDOM from 'react-dom/client'
// import * as ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'
import App from '../components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//ReactDOM.render(<div>) is no longer supported in react 18
// used createRoot

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(
    // <App/>,
    // <Hello name="React" />,
    <Router>
        <Route path="/" component={App}/>
    </Router>,
    document.body.appendChild(document.createElement('div')),
    )
  })

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(
//   <h1>Hellow World</h1>
// );

  // const Hello = props => (
  //   <div>Hello {props.name}!</div>
  // )

  // Hello.defaultProps = {
  //   name: 'David'
  // }

  // Hello.propTypes = {
  //   name: PropTypes.string
  // }
