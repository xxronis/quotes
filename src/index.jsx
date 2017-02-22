import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <h2>I will do the paperwork!</h2>;
  }
}

render(<App/>, document.getElementById('app'));
