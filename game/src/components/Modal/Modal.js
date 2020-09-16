import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <div className={styles.Align}>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={styles.Modal}
             style={{
             transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        }}>
            {props.children}
            <button className={styles.Button} onClick={props.clicked}>New Game</button>
        </div>
    </div>

);

export default modal;