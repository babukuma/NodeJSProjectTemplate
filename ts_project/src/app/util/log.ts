// Log modules
export class Log {
    static debug(msg: string) {
        console.log("[DEBUG]", msg);
    }
    static info(msg: string) {
        console.log("[INFO]", msg);
    }
    static error(msg: string) {
        console.error("[ERROR]", msg);
    }
}
