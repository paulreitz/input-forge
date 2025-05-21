import { createSignal } from 'solid-js';
import { OpenDialogCommand } from '../command/open-dialog-command';
import { CloseDialogCommand } from '../command/close-dialog-command';

const [showDialog, setShowDialog] = createSignal<boolean>(false);

export { showDialog };
export const openDialog = new OpenDialogCommand(setShowDialog);
export const closeDialog = new CloseDialogCommand(setShowDialog);