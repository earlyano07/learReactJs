
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Kontak from "pages/Kontak";

import 'assets/scss_copy/style.scss';

import  LandingPages  from 'pages/LandingPages';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPages}></Route>
        <Route path="/kontak" component={Kontak}></Route>
        <Route path="/kontak" component={Kontak}></Route>
      </Router>
    </div>
  )
}

export default App;