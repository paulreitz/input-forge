import { AxesInput } from './input-map';

export abstract class Command {
    public abstract execute(value?: any): void;
    public update(_value?: any): void {}
    public release(): void {}
}

export abstract class AxesCommand extends Command {
    public abstract execute(value: [number, number] | AxesInput): void;
    public update(_value: [number, number] | AxesInput): void {}
}