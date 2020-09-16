import React, { Component } from 'react';
import styles from './App.module.css';
import Board from './components/Board/Board';

class App extends Component {
  render () {
    return (
      <div className={styles.App} >
        <h1 className={styles.Name}>TicTacToe</h1>
        <Board />
      </div>
    )
  }
}

export default App;
