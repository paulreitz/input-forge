import { Component } from 'solid-js';
import styles from './radar-display.module.scss';

import { width, height, dotX, dotY } from '../../state/radar-dimensions';

const RadarDisplay: Component = () => {
    return (
        <div class={styles.container} style={`width: ${width()}px; height: ${height()}px;`}>
            <div class={styles.dot} style={`left: ${dotX()}px; top: ${dotY()}px;`}></div>
        </div>
    );
}

export default RadarDisplay;