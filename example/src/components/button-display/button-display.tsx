import { Component } from 'solid-js';
import styles from './button-display.module.scss';
import { AButtonState, BButtonState, XButtonState, YButtonState } from '../../state/button-state';

export const ButtonDisplay: Component = () => {
    return (
        <div class={styles.container}>
            <div class={`${styles.row} ${styles.topRow}`}>
                <div class={styles.button} style={`background-color: ${YButtonState() ? 'yellow': '#3e3e3e'}`}></div>
            </div>
            <div class={`${styles.row} ${styles.middleRow}`}>
                <div class={styles.button} style={`background-color: ${XButtonState() ? 'blue': '#3e3e3e'}`}></div>
                <div class={styles.button} style={`background-color: ${BButtonState() ? 'red': '#3e3e3e'}`}></div>
            </div>
            <div class={`${styles.row} ${styles.bottomRow}`}>
                <div class={styles.button} style={`background-color: ${AButtonState() ? 'green': '#3e3e3e'}`}></div>
            </div>
        </div>
    )
};

export default ButtonDisplay;