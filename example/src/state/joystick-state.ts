import { createSignal } from 'solid-js';
import { JoystickCommand } from '../command/joystick-command';

const [verticalAxis, setVerticalAxis] = createSignal<number>(0);
const [horizontalAxis, setHorizontalAxis] = createSignal<number>(0);

export {
    verticalAxis,
    horizontalAxis,
};

// export const joystick = new JoystickCommand(setVerticalAxis, setHorizontalAxis);