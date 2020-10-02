import React, { Component } from 'react';
import Cells from '../Cells/Cells';
import styles from './Board.module.css';
import Modal from '../Modal/Modal';

class Board extends Component {

    state = {
        grid: [
          {id: 0, value:''},
          {id: 1, value:''},
          {id: 2, value:''},
          {id: 3, value:''},
          {id: 4, value:''},
          {id: 5, value:''},
          {id: 6, value:''},
          {id: 7, value:''},
          {id: 8, value:''},
        ],
        X: true,
        gamePlaying: true,
        status: '',
        showModal: false
      }


      putXor0 = (id) => {
          if (this.state.gamePlaying) {
            const gridIndex = this.state.grid.findIndex(i => {
                return i.id === id;
            })
            
            const cell = {...this.state.grid[gridIndex]};
            if (this.state.X && cell.value === '') {
                cell.value = 'X';
                this.setState ({X: !this.state.X});
            }
            if (this.state.X === false && cell.value === '') {
                cell.value = 0;
                this.setState ({X: !this.state.X});
            }
                
            const grid = [...this.state.grid];
            grid[gridIndex] = cell;
            this.setState ({grid: grid}, this.checkWinner);                
            } 
          }
            

        checkWinner = () => {  
        const { grid } = this.state;  

        if (
            grid[0].value !== '' && grid[1].value !== '' && grid[2].value !== '' 
            && grid[3].value !== '' && grid[4].value !== '' && grid[5].value !== '' 
            && grid[6].value !== '' && grid[7].value !== '' && grid[8].value !== '') {
            this.setState({gamePlaying: false}) 
            this.setState ({showModal: true});
            this.setState({status: `It's a draw!`})
        }
        
        if (grid[0].value === 'X' && grid[1].value === 'X' && grid[2].value === 'X' 
            || grid[3].value === 'X' && grid[4].value === 'X' && grid[5].value === 'X' 
            || grid[6].value === 'X' && grid[7].value === 'X' && grid[8].value === 'X'
            || grid[0].value === 'X' && grid[3].value === 'X' && grid[6].value === 'X'
            || grid[1].value === 'X' && grid[4].value === 'X' && grid[7].value === 'X' 
            || grid[2].value === 'X' && grid[5].value === 'X' && grid[8].value === 'X'
            || grid[0].value === 'X' && grid[4].value === 'X' && grid[8].value === 'X' 
            || grid[2].value === 'X' && grid[4].value === 'X' && grid[6].value === 'X'
            ) {
            this.setState({gamePlaying: false});
            this.setState ({showModal: true});
            this.setState({status: 'Congrats! X has won!'})


        }  if (grid[0].value === 0 && grid[1].value === 0 && grid[2].value === 0 
            || grid[3].value === 0 && grid[4].value === 0 && grid[5].value === 0 
            || grid[6].value === 0 && grid[7].value === 0 && grid[8].value === 0
            || grid[0].value === 0 && grid[3].value === 0 && grid[6].value === 0
            || grid[1].value === 0 && grid[4].value === 0 && grid[7].value === 0 
            || grid[2].value === 0 && grid[5].value === 0 && grid[8].value === 0
            || grid[0].value === 0 && grid[4].value === 0 && grid[8].value === 0 
            || grid[2].value === 0 && grid[4].value === 0 && grid[6].value === 0) {
            this.setState({gamePlaying: false});
            this.setState ({showModal: true});
            this.setState({status: 'Congrats! 0 has won!'})
        } 


               
    } 

    closeModal = () => {
        this.setState ({showModal: false})
    }


    newGame = () => {
        this.setState ({grid: [
            {id: 0, value:''},
            {id: 1, value:''},
            {id: 2, value:''},
            {id: 3, value:''},
            {id: 4, value:''},
            {id: 5, value:''},
            {id: 6, value:''},
            {id: 7, value:''},
            {id: 8, value:''},
          ],
          X: true,
          gamePlaying: true,
          status: '',
          showModal: false
        }) 
          
    }

      render () {
        const board = this.state.grid.map((grid) => {
            return <Cells 
            value={grid.value}
            key={grid.id}
            clicked={() => {this.putXor0(grid.id)}}/>
        })
          return (
              <React.Fragment>
                    <div className={styles.Container}>
                        <Modal show={this.state.showModal} modalClosed={this.closeModal} clicked={this.newGame}>
                            {this.state.status}
                        </Modal>
                        <div className={styles.Board}>
                            {board}
                        </div> 
                    </div>
                    <button className={styles.Button} onClick={this.newGame}>New Game</button>
              </React.Fragment>
          )
      }
}


export default Board;