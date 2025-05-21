import { Component } from 'solid-js';
import styles from './about-dialog.module.scss';

const AboutDialog: Component = () => {
    return (
        <div class={styles.container}>
            <div class={styles.contentContainer}>
                <div class={styles.content}>
                    <div class={styles.mainContent}>
                        <h1 class={styles.title}>Sample Dialog</h1>
                        <p class={styles.description}>
                            This is to test the input map stack. This is to change the input map based on
                            different contexts.
                        </p>
                    </div>
                    <div class={styles.footer}>
                        Close: Esc or B/Circle button</div>
                </div>
            </div>
        </div>
    )
}

export default AboutDialog;