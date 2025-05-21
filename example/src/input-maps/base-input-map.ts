import {AButton, BButton, XButton, YButton} from '../state/button-state';
import { joystick } from '../state/radar-dimensions';
import { openDialog } from '../state/show-dialog';
import { Inputs, InputMap } from 'input-forge';

export const baseInputMap: InputMap = {
    singleInput: {
        aButton: {
            keyboardInput: Inputs.KEYBOARD_Z,
            controllerInput: Inputs.CONTROLLER_FACE_BOTTOM,
            command: AButton
        },
        bButton: {
            keyboardInput: Inputs.KEYBOARD_X,
            controllerInput: Inputs.CONTROLLER_FACE_RIGHT,
            command: BButton
        },
        xButton: {
            keyboardInput: Inputs.KEYBOARD_C,
            controllerInput: Inputs.CONTROLLER_FACE_LEFT,
            command: XButton
        },
        yButton: {
            keyboardInput: Inputs.KEYBOARD_V,
            controllerInput: Inputs.CONTROLLER_FACE_TOP,
            command: YButton
        },
        menuButton: {
            keyboardInput: Inputs.KEYBOARD_ESCAPE,
            controllerInput: Inputs.CONTROLLER_START,
            command: openDialog
        }
    },
    axesInput: {
        leftStick: {
            controllerstick: Inputs.CONTROLLER_LEFT_STICK,
            keyboardAxes: {
                vertical: {
                    up: Inputs.KEYBOARD_W,
                    down: Inputs.KEYBOARD_S
                },
                horizontal: {
                    left: Inputs.KEYBOARD_A,
                    right: Inputs.KEYBOARD_D
                }
            },
            command: joystick
        }
    }
}