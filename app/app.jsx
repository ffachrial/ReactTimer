import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory} from 'react-router';

// Load foundations
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

import Main from 'Main';
import Countdown from 'Countdown';
import Timer from 'Timer';

ReactDOM.render(
  // Component will Render
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
