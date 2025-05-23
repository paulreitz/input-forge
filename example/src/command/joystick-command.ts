import { Inputs, AxesCommand, AxesInputEntry, AxesInput } from "input-forge";
import { Setter } from "solid-js";
import { width, height, dotX, dotY } from "../state/radar-dimensions";

export class JoystickCommand extends AxesCommand {
    private vertical: number = 0;
    private horizontal: number = 0;

    constructor(
        private setDotX: Setter<number>,
        private setDotY: Setter<number>
    ) {
        super();
        setDotX(width() / 2);
        setDotY(height() / 2);
    }

    trigger(value: [number, number] | AxesInput) {
        let adjustedWidth = width() - 20;
        let adjustedHeight = height() - 20;
        if (Array.isArray(value)) {
            value[0] ? (this.horizontal = value[1]) : (this.vertical = value[1]);
            const targetX = adjustedWidth / 2 + this.horizontal * (adjustedWidth / 2);
            const targetY = adjustedHeight / 2 + this.vertical * (adjustedHeight / 2);
            const newX = dotX() + (targetX - dotX()) * 0.1;
            const newY = dotY() + (targetY - dotY()) * 0.1;
            this.setDotX(newX);
            this.setDotY(newY);
        } else {
            adjustedWidth = width() - 20;
            adjustedHeight = height() - 20;
            const x = adjustedWidth / 2 + value.x * (adjustedWidth / 2);
            const y = adjustedHeight / 2 + value.y * (adjustedHeight / 2);
            this.setDotX(x);
            this.setDotY(y);
        }
    }

    update(value: [number, number] | AxesInput) {
        let adjustedWidth = width() - 20;
        let adjustedHeight = height() - 20;
        if (Array.isArray(value)) {
            value[0] ? (this.horizontal = value[1]) : (this.vertical = value[1]);
            const targetX = adjustedWidth / 2 + this.horizontal * (adjustedWidth / 2);
            const targetY = adjustedHeight / 2 + this.vertical * (adjustedHeight / 2);
            const newX = dotX() + (targetX - dotX()) * 0.1;
            const newY = dotY() + (targetY - dotY()) * 0.1;
            this.setDotX(newX);
            this.setDotY(newY);
        } else {
            adjustedWidth = width() - 20;
            adjustedHeight = height() - 20;
            const x = adjustedWidth / 2 + value.x * (adjustedWidth / 2);
            const y = adjustedHeight / 2 + value.y * (adjustedHeight / 2);
            this.setDotX(x);
            this.setDotY(y);
        }
    }
}
