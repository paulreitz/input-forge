export const Inputs = {
    KEYBOARD_A: 'a',
    KEYBOARD_B: 'b',
    KEYBOARD_C: 'c',
    KEYBOARD_D: 'd',
    KEYBOARD_E: 'e',
    KEYBOARD_F: 'f',
    KEYBOARD_G: 'g',
    KEYBOARD_H: 'h',
    KEYBOARD_I: 'i',
    KEYBOARD_J: 'j',
    KEYBOARD_K: 'k',
    KEYBOARD_L: 'l',
    KEYBOARD_M: 'm',
    KEYBOARD_N: 'n',
    KEYBOARD_O: 'o',
    KEYBOARD_P: 'p',
    KEYBOARD_Q: 'q',
    KEYBOARD_R: 'r',
    KEYBOARD_S: 's',
    KEYBOARD_T: 't',
    KEYBOARD_U: 'u',
    KEYBOARD_V: 'v',
    KEYBOARD_W: 'w',
    KEYBOARD_X: 'x',
    KEYBOARD_Y: 'y',
    KEYBOARD_Z: 'z',
    KEYBOARD_1: '1',
    KEYBOARD_2: '2',
    KEYBOARD_3: '3',
    KEYBOARD_4: '4',
    KEYBOARD_5: '5',
    KEYBOARD_6: '6',
    KEYBOARD_7: '7',
    KEYBOARD_8: '8',
    KEYBOARD_9: '9',
    KEYBOARD_0: '0',
    KEYBOARD_F1: 'f1',
    KEYBOARD_F2: 'f2',
    KEYBOARD_F3: 'f3',
    KEYBOARD_F4: 'f4',
    KEYBOARD_F5: 'f5',
    KEYBOARD_F6: 'f6',
    KEYBOARD_F7: 'f7',
    KEYBOARD_F8: 'f8',
    KEYBOARD_F9: 'f9',
    KEYBOARD_F10: 'f10',
    KEYBOARD_F11: 'f11',
    KEYBOARD_F12: 'f12',
    KEYBOARD_UP: 'arrowup',
    KEYBOARD_DOWN: 'arrowdown',
    KEYBOARD_LEFT: 'arrowleft',
    KEYBOARD_RIGHT: 'arrowright',
    KEYBOARD_HOME: 'home',
    KEYBOARD_END: 'end',
    KEYBOARD_PAGE_UP: 'pageup',
    KEYBOARD_PAGE_DOWN: 'pagedown',
    KEYBOARD_SPACE: 'space',
    KEYBOARD_TAB: 'tab',
    KEYBOARD_ENTER: 'enter',
    KEYBOARD_ESCAPE: 'escape',
    KEYBOARD_BACKSPACE: 'backspace',
    KEYBOARD_DELETE: 'delete',
    KEYBOARD_INSERT: 'insert',
    KEYBOARD_SUBTRACT: 'subtract',
    KEYBOARD_ADD: 'add',
    KEYBOARD_MULTIPLY: 'multiply',
    KEYBOARD_SHIFT: 'shift',
    KEYBOARD_CONTROL: 'control',
    KEYBOARD_ALT: 'alt',
    KEYBOARD_COMMA: 'comma',
    KEYBOARD_PERIOD: 'period',
    KEYBOARD_SEMICOLON: 'semicolon',
    KEYBOARD_QUOTE: 'quote',
    KEYBOARD_BACKQUOTE: 'backquote',
    KEYBOARD_MINUS: 'minus',
    KEYBOARD_EQUAL: 'equal',
    KEYBOARD_BRACKET_LEFT: 'bracketleft',
    KEYBOARD_BRACKET_RIGHT: 'bracketright',
    KEYBOARD_BACKSLASH: 'backslash',
    KEYBOARD_SLASH: 'slash',
    CONTROLLER_FACE_BOTTOM: 'face_bottom',
    CONTROLLER_FACE_RIGHT: 'face_right',
    CONTROLLER_FACE_LEFT: 'face_left',
    CONTROLLER_FACE_TOP: 'face_top',
    CONTROLLER_LEFT_BUMPER: 'left_bumper',
    CONTROLLER_RIGHT_BUMPER: 'right_bumper',
    CONTROLLER_LEFT_TRIGGER: 'left_trigger',
    CONTROLLER_RIGHT_TRIGGER: 'right_trigger',
    CONTROLLER_BACK: 'back',
    CONTROLLER_START: 'start',
    CONTROLLER_LEFT_STICK_BUTTON: 'left_stick',
    CONTROLLER_RIGHT_STICK_BUTTON: 'right_stick',
    CONTROLLER_HOME: 'home',
    CONTROLLER_DPAD_UP: 'dpad_up',
    CONTROLLER_DPAD_DOWN: 'dpad_down',
    CONTROLLER_DPAD_LEFT: 'dpad_left',
    CONTROLLER_DPAD_RIGHT: 'dpad_right',
    CONTROLLER_LEFT_STICK: 'left_stick',
    CONTROLLER_RIGHT_STICK: 'right_stick',
    SYSTEM_TICK: 'tick'
};

export const buttonMap: string[] = [
    Inputs.CONTROLLER_FACE_BOTTOM,
    Inputs.CONTROLLER_FACE_RIGHT,
    Inputs.CONTROLLER_FACE_LEFT,
    Inputs.CONTROLLER_FACE_TOP,
    Inputs.CONTROLLER_LEFT_BUMPER,
    Inputs.CONTROLLER_RIGHT_BUMPER,
    Inputs.CONTROLLER_LEFT_TRIGGER,
    Inputs.CONTROLLER_RIGHT_TRIGGER,
    Inputs.CONTROLLER_BACK,
    Inputs.CONTROLLER_START,
    Inputs.CONTROLLER_LEFT_STICK_BUTTON,
    Inputs.CONTROLLER_RIGHT_STICK_BUTTON,
    Inputs.CONTROLLER_DPAD_UP,
    Inputs.CONTROLLER_DPAD_DOWN,
    Inputs.CONTROLLER_DPAD_LEFT,
    Inputs.CONTROLLER_DPAD_RIGHT,
    Inputs.CONTROLLER_HOME
];

export const symbolToConstant = (symbol: string): string => {
    switch (symbol) {
        case ' ': return Inputs.KEYBOARD_SPACE;
        case '/': return Inputs.KEYBOARD_SLASH;
        case ',': return Inputs.KEYBOARD_COMMA;
        case '.': return Inputs.KEYBOARD_PERIOD;
        case ';': return Inputs.KEYBOARD_SEMICOLON;
        case '\'': return Inputs.KEYBOARD_QUOTE;
        case '`': return Inputs.KEYBOARD_BACKQUOTE;
        case '-': return Inputs.KEYBOARD_MINUS;
        case '=': return Inputs.KEYBOARD_EQUAL;
        case '[': return Inputs.KEYBOARD_BRACKET_LEFT;
        case ']': return Inputs.KEYBOARD_BRACKET_RIGHT;
        case '\\': return Inputs.KEYBOARD_BACKSLASH;
        case '+': return Inputs.KEYBOARD_ADD;
        case '_': return Inputs.KEYBOARD_SUBTRACT;
        case '*': return Inputs.KEYBOARD_MULTIPLY;
        default: return symbol;
    }
};
