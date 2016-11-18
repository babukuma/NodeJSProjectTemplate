// Calcurator modules
export class Calcurator {
    static add(x: number, ...n: number[]): number {
        let total = x;
        for (let i = 0; i < n.length; i++) {
            total += n[i];
        }
        return total;
    }
    static subtract(x: number, ...n: number[]): number {
        let total = x;
        for (let i = 0; i < n.length; i++) {
            total -= n[i];
        }
        return total;
    }
}

