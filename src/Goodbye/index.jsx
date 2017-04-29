import React, {Component} from 'react';
import style from './index.css';

class Goodbye extends Component {
  render() {
    return (
      <h1 className={style.message}>Goodbye from React</h1>
    )
  }
}

export default Goodbye;
