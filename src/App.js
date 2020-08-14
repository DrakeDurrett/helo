import React from 'react';
import Nav from './components/Nav/Nav';
import routes from './routes';
import { withRouter } from 'react-router-dom';
import './App.css';

function App(props) {
  console.log(props)
  return (
    <div>
      <Nav />
      { routes }
    </div>
  );
}

export default withRouter(App);
