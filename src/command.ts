import { AxesInput } from './input-map';

export abstract class Command {
    public trigger(value?: any): void {}
    public update(_value?: any): void {}
    public release(): void {}
}

export abstract class AxesCommand extends Command {
    public trigger(value: [number, number] | AxesInput): void {}
    public update(_value: [number, number] | AxesInput): void {}
}

export abstract class TickCommand extends Command {
    public tick(delta: number): void {}
}