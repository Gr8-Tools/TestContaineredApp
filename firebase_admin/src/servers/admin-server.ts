import {BaseServer} from "./base-server";
import {RoutingControllersOptions} from "routing-controllers";
import {IServer} from "./interfaces";
import {ServerController} from "./controllers/server-controller";
import {EnvVar} from "../utils/environment-variables";

export class AdminServer extends BaseServer{
    get routingControllerOptions(): RoutingControllersOptions {
        return <RoutingControllersOptions>{
            controllers : [
                ServerController
            ]
        };
    }

    static async create() : Promise<IServer> {
        return new AdminServer(EnvVar.getInt("PORT"));
    }
}
