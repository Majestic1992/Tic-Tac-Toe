import React from 'react';
import styles from './Cells.module.css';


const board = (props) => (
    <div>
        <div className={styles.Cells} onClick={props.clicked}>{props.value}</div>
    </div>

)

export default board;