import { Command } from 'input-forge';
import { Setter } from 'solid-js';
import { inputManager } from '../state/input-state';

export class CloseDialogCommand extends Command {
    constructor(private setShowDialog: Setter<boolean>) {
        super();
    }

    execute() {
        this.setShowDialog(false);
        inputManager.popInputMap();
    }
}