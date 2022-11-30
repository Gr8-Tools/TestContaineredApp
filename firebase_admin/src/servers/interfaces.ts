export interface IServer {
    isActive: boolean;

    start() : Promise<IServer>
    work(func: () => boolean, tickMs: number): Promise<void>
    shutdown(): Promise<void>
}