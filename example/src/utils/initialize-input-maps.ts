import { openDialog } from '../state/show-dialog';
import { initializeDialogInputMap } from '../input-maps/dialog-input-map';

export function initializeInputMaps() {
    initializeDialogInputMap(openDialog);
}