import type { Component } from 'solid-js';
import { onMount, Show } from 'solid-js';
import styles from './App.module.scss';

import { showDialog } from './state/show-dialog';
import { initializeInputMaps } from './utils/initialize-input-maps';

import { inputManager } from './state/input-state';
import { baseInputMap } from './input-maps/base-input-map';

import RadarDisplay from './components/radar-display/radar-display';
import ButtonDisplay from './components/button-display/button-display';
import AboutDialog from './components/about-dialog/about-dialog';


const App: Component = () => {

    onMount(() => {
        initializeInputMaps();
        inputManager.setInputMap(baseInputMap);
    });

    return (
        <div class={styles.App}>
            <div class={styles.header}>
                <h1 class={styles.title}>Input Example</h1>
                <p class={styles.description}>
                    This is a very simple example to test out the input system.
                </p>
                <p class={styles.description}>
                    The left stick of the controller or WASD will move the red dot around.
                </p>
                <p class={styles.description}>
                    The face buttons and Z,X,C,V map to the four circles displayed on the right. 
                </p>
                <p class={styles.description}>
                    Press the menu button or Esc to open a simple dialog. This demonstrates pushing and popping input maps to the input manager.
                </p>
            </div>
            <div class={styles.display}>
                <RadarDisplay />
                <ButtonDisplay />
            </div>
            <Show when={showDialog()}>
                <AboutDialog />
            </Show>
        </div>
    );
};

export default App;
