import React, {Component} from 'react';
import Hello from '../Hello/index.jsx';
import Goodbye from '../Goodbye/index.jsx';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <Hello/>
        <Goodbye/>
      </div>
    )
  }
}

export default HelloWorld;
