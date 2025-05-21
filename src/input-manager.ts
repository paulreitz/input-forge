import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { InputSource } from "./input-source";
import { Command, AxesCommand } from "./command";
import {
    InputMap,
    AxesInput,
    SingleInputEntry,
    AxesInputEntry,
} from "./input-map";

export class InputManager {
    private _inputMapStack: InputMap[] = [];

    private _disconnect$ = new Subject<void>();
    private _inputSource: InputSource;

    constructor(fps: number = 12, deadzone: number = 0.1) {
        this._inputSource = new InputSource(fps, deadzone);

        this._inputSource.singleInputTrigger$
            .pipe(takeUntil(this._disconnect$))
            .subscribe((key: string) => {
                if (!!this._inputMapStack.length) {
                    const commands = this.getCommands(key);
                    commands.forEach((command: Command) => {
                        command.execute();
                    });

                    const axesCommands = this.getAxesByKey(key);
                    axesCommands.forEach(
                        (entry: { command: AxesCommand; axis: [number, number] }) => {
                            const command = entry.command;
                            command.execute(entry.axis);
                        }
                    );
                }
            });

        this._inputSource.singleInputUpdate$
            .pipe(takeUntil(this._disconnect$))
            .subscribe((key: string) => {
                if (!!this._inputMapStack.length) {
                    const commands = this.getCommands(key);
                    commands.forEach((command: Command) => {
                        command.update();
                    });

                    const axesCommands = this.getAxesByKey(key);
                    axesCommands.forEach(
                        (entry: { command: AxesCommand; axis: [number, number] }) => {
                            const command = entry.command;
                            command.update(entry.axis);
                        }
                    );
                }
            });

        this._inputSource.singleInputRelease$
            .pipe(takeUntil(this._disconnect$))
            .subscribe((key: string) => {
                if (!!this._inputMapStack.length) {
                    const commands = this.getCommands(key);
                    commands.forEach((command: Command) => {
                        command.release();
                    });

                    const axesCommands = this.getAxesByKey(key);
                    axesCommands.forEach(
                        (entry: { command: AxesCommand; axis: [number, number] }) => {
                            const command = entry.command;
                            command.update([entry.axis[0], 0]);
                        }
                    );
                }
            });

        this._inputSource.axesInputTrigger$
            .pipe(takeUntil(this._disconnect$))
            .subscribe((data: { name: string; axes: AxesInput }) => {
                if (!!this._inputMapStack.length) {
                    const commands = this.getAxesCommands(data.name);
                    commands.forEach((command: AxesCommand) => {
                        command.execute(data.axes);
                    });
                }
            });

        this._inputSource.axesInputUpdate$
            .pipe(takeUntil(this._disconnect$))
            .subscribe((data: { name: string; axes: AxesInput }) => {
                if (!!this._inputMapStack.length) {
                    const commands = this.getAxesCommands(data.name);
                    commands.forEach((command: AxesCommand) => {
                        command.update(data.axes);
                    });
                }
            });
            
        this._inputSource.axesInputRelease$
            .pipe(takeUntil(this._disconnect$))
            .subscribe((data: { name: string; axes: AxesInput }) => {
                if (!!this._inputMapStack.length) {
                    const commands = this.getAxesCommands(data.name);
                    commands.forEach((command: AxesCommand) => {
                        command.release();
                    });
                }
            });
    }

    public pushInputMap(inputMap: InputMap): void {
        this._inputMapStack.push(inputMap);
    }

    public setInputMap(inputMap: InputMap): void {
        this._inputMapStack = [inputMap];
    }

    public popInputMap(): void {
        this._inputMapStack.pop();
    }

    private getCommands(key: string): Command[] {
        const inputMap = this._inputMapStack.at(-1);
        return Object.values(inputMap!.singleInput)
            .filter(
                (entry: SingleInputEntry) =>
                    entry.keyboardInput === key || entry.controllerInput === key
            )
            .map((entry: SingleInputEntry) => entry.command);
    }

    private getAxesCommands(name: string): AxesCommand[] {
        const inputMap = this._inputMapStack.at(-1);
        return Object.values(inputMap!.axesInput)
            .filter((entry: AxesInputEntry) => entry.controllerstick === name)
            .map((entry: AxesInputEntry) => entry.command);
    }

    private getAxesByKey(
        key: string
    ): { command: AxesCommand; axis: [number, number] }[] {
        const inputMap = this._inputMapStack.at(-1);
        if (!inputMap) {
            return [];
        }
        if (!inputMap.axesInput || Object.keys(inputMap.axesInput).length === 0) {
            return [];
        }
        return Object.values(inputMap!.axesInput)
            .filter((entry: AxesInputEntry) => {
                switch (key) {
                    case entry.keyboardAxes?.vertical.up:
                        return true;
                    case entry.keyboardAxes?.vertical.down:
                        return true;
                    case entry.keyboardAxes?.horizontal.left:
                        return true;
                    case entry.keyboardAxes?.horizontal.right:
                        return true;
                    default:
                        return false;
                }
            })
            .map((entry: AxesInputEntry) => {
                let axis: [number, number] = [0, 0];
                switch (key) {
                    case entry.keyboardAxes?.vertical.up:
                        axis = [0, -1];
                        break;
                    case entry.keyboardAxes?.vertical.down:
                        axis = [0, 1];
                        break;
                    case entry.keyboardAxes?.horizontal.left:
                        axis = [1, -1];
                        break;
                    case entry.keyboardAxes?.horizontal.right:
                        axis = [1, 1];
                        break;
                }
                return {
                    command: entry.command,
                    axis: axis,
                };
            });
    }
}
