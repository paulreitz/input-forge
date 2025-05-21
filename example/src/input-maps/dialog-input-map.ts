import { closeDialog } from '../state/show-dialog';
import { Inputs, InputMap } from 'input-forge';

export const dialogInputMap: InputMap = {
    singleInput: {
        closeButton: {
            keyboardInput: Inputs.KEYBOARD_ESCAPE,
            controllerInput: Inputs.CONTROLLER_FACE_RIGHT,
            command: closeDialog
        }
    },
    axesInput: {}
};

export function initializeDialogInputMap(openDialogCommand: any): void {
    if (openDialogCommand && typeof openDialogCommand.setDialogInputMap === 'function') {
        openDialogCommand.setDialogInputMap(dialogInputMap)
    }
}