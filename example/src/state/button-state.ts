import { createSignal } from 'solid-js';
import { ButtonCommand } from '../command/button-commands'

const [AButtonState, setAButtonState] = createSignal<boolean>(false);
const [BButtonState, setBButtonState] = createSignal<boolean>(false);
const [XButtonState, setXButtonState] = createSignal<boolean>(false);
const [YButtonState, setYButtonState] = createSignal<boolean>(false);

export {
    AButtonState,
    BButtonState,
    XButtonState,
    YButtonState,
};

export const AButton = new ButtonCommand(setAButtonState);
export const BButton = new ButtonCommand(setBButtonState);
export const XButton = new ButtonCommand(setXButtonState);
export const YButton = new ButtonCommand(setYButtonState);