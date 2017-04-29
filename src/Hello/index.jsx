import React, {Component} from 'react';
import style from './index.css';

class Hello extends Component {
  render() {
    return (
      <h1 className={style.message}>Hello from React</h1>
    )
  }
}

export default Hello;
