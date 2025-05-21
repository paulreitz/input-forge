# Input Forge

Input Forge is a platform-agnostic input management library designed to seamlessly normalize inputs from keyboards and game controllers. For games built with Phaser, Three.js, or another framework, Input Forge simplifies input handling by supporting multiple input sources, customizable controls, and a unified API for event-driven and polled inputs.

> **NOTICE:**
>
> This is not a production-ready library. There may be serious bugs, and breaking changes could occur in future updates.
> Use at your own risk.

---

## Features

Input Forge aims to provide a flexible and robust input management solution with the following capabilities:

- **Platform-Agnostic**: Integrates seamlessly with any JavaScript-based platform, such as Phaser or Three.js.
- **Multi-Input Support**: Handles multiple input sources (e.g., keyboard and gamepad) for a single action.
- **Normalized Inputs**: Unifies event-driven keyboard inputs and polled gamepad inputs into a consistent API.
- **Customizable Controls**: Enables dynamic input mapping, allowing players to personalize their controls.
- **Streamlined Development**: Reduces the complexity of input management, freeing developers to focus on core game logic.

---

## Roadmap

The following features and improvements are planned to enhance Input Forge:

**Usability Enhancements**:

- **Improved Fake Joysticks**: Enhance keyboard-based joystick emulation to be more intuitive and responsive, improving the experience for users mapping any set of keys (e.g., WASD) to joystick-like controls.
- **Simplified Input Maps**: Streamline the input mapping process to reduce complexity and improve developer usability.
- **Game Controller Detection**: Implement detection of game controller types (e.g., Xbox, PlayStation) to enable platform-specific UI graphics, such as displaying the correct button icons for in-game actions.

**Stability Improvements**:

- **Robust Input Map Stack**: Add safeguards to prevent synchronization issues in the `input map stack`, such as handling incorrect `pop` operations.
- **Circular Dependency Resolution**: Develop a cleaner solution for circular dependencies between input maps and commands, eliminating the need for workarounds.

---

## Known Issues

- **Axis Command Conflicts**: When switching between keyboard and gamepad inputs, Axis Commands may produce inconsistent behavior. This can affect actions relying on smooth transitions between input devices.
- **Circular Dependencies**: Input maps referencing commands that reference input maps can cause circular dependencies. A temporary workaround is available in the example code (`App.tsx`).
