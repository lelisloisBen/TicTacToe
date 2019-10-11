import React from 'react';
import styles from './TicTac.module.css';

const TicTacToe = () => {
    return (
        <>
        <div class={styles.board}>
            <div class={styles.square}>X</div>
            <div class={styles.square}>O</div>
            <div class={styles.square}>O</div>
            <div class={styles.square}>O</div>
            <div class={styles.square}>X</div>
            <div class={styles.square}>O</div>
            <div class={styles.square}>O</div>
            <div class={styles.square}>X</div>
            <div class={styles.square}>X</div>
        </div>
        </>
    );
};

export default TicTacToe;