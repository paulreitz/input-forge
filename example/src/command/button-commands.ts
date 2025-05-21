import { Command } from 'input-forge';
import { Setter } from 'solid-js';

export class ButtonCommand extends Command {
    constructor(private setButtonState: Setter<boolean>) {
        super();
    }

    execute() {
        this.setButtonState(true);
    }

    release() {
        this.setButtonState(false);
    }
}