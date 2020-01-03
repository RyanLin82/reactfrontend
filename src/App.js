import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import ICCT from './Components/ICCT';
import CM from './Components/CM';
import Intro from './Components/Intro';
import MemberList from './Components/MemberList';

class App extends React.Component{
  render(){
      return (
          <div className="App">
            <li>
              <Link to="/ICCT">ICCT</Link>
            </li>
            <li>
              <Link to="/CM">CM</Link>
            </li>
            <li>
              <Link to="/MemberList">MemberList</Link>
            </li>
            <Switch>
              <Route path = "/CM" component={CM} />
              <Route path = "/ICCT" component={ICCT} />
              <Route path = "/MemberList" component={MemberList} />
              
              <Route path = "/" exact component = {Intro} />
              
            </Switch> 
          </div>
      );
  }
}

export default App;
