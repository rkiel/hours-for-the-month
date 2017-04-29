import React, {Component} from 'react';
import style from './index.css';

class HelloWorld extends Component {
  render() {
    return (
      <h1 className={style.message}>Hello World from React</h1>
    )
  }
}

export default HelloWorld;
