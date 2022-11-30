import {createExpressServer, RoutingControllersOptions} from 'routing-controllers';
import {IServer} from "./interfaces";

export abstract class BaseServer implements IServer{
    private static __instance: IServer;
    static get instance() : IServer {
        return this.__instance;
    }

    private readonly __port: number;
    private __server: any;
    isActive: boolean;

    protected constructor(port: number) {
        if (BaseServer.__instance) {
            throw new Error("Server has been already defined!");
        }

        this.__port = port;
        this.isActive = true;

        BaseServer.__instance = <IServer>this;
    }

    abstract get routingControllerOptions() : RoutingControllersOptions;

    async start() : Promise<IServer> {
        return new Promise<IServer>((resolve) => {
            const options = this.routingControllerOptions;
            const app = createExpressServer(options);
            this.__server = app.listen(this.__port, () => {
                console.log(`Running on port ${this.__port}`);
                resolve(<IServer>this);
            });
        })
    }

    async work(func: () => boolean, tickMs: number): Promise<void> {
        return new Promise<void>((resolve) => {
            function resolveInternal() {
                if (func()) {
                    resolve();
                } else {
                    setTimeout(resolveInternal, tickMs);
                }
            }

            resolveInternal();
        });
    }

    async shutdown() : Promise<void> {
        this.__server.close(() => {
            console.log("Shutdown server")
        })
    }
}
