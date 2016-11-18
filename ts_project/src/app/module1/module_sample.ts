import { Calcurator } from "../util/calcurator";

export default class DefaultModule01 {
    getHello(): string {
        return "Hello";
    }
}

export class Module02 {
    add(x: number, y: number): number {
        return Calcurator.add(x, y);
    }
}