import { createSignal } from 'solid-js';
import { JoystickCommand } from '../command/joystick-command';

const [width, setWidth] = createSignal<number> (250);
const [height, setHeight] = createSignal<number> (250);
const [dotX, setDotX] = createSignal<number>(width() / 2);
const [dotY, setDotY] = createSignal<number>(height() / 2);

export {
    width,
    height,
    dotX,
    dotY,
};

export const joystick = new JoystickCommand(setDotX, setDotY);