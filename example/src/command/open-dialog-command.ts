import { Command } from 'input-forge';
import { Setter } from 'solid-js';
import { InputMap } from 'input-forge';
import { inputManager } from '../state/input-state';

export class OpenDialogCommand extends Command {
    private dialogInputMap: InputMap | null = null;
    constructor(private setShowDialog: Setter<boolean>) {
        super();
    }

    setDialogInputMap(inputMap: InputMap) {
        this.dialogInputMap = inputMap;
    }

    execute() {
        this.setShowDialog(true);
        if (this.dialogInputMap) {
            inputManager.pushInputMap(this.dialogInputMap);
        } else {
            console.error('Dialog input map is not set.');
        }
    }
}

