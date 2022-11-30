import {Controller, Get, InternalServerError} from 'routing-controllers';
import 'reflect-metadata';
import {IServer} from "../interfaces";
import {Container} from "typedi";

@Controller()
export class ServerController {
    private __server: IServer;

    get server(): IServer {
        if(!this.__server){
            this.__server = Container.get<IServer>("server");
        }
        return this.__server;
    }

    @Get('/')
    isAlive() {
        return "Server is alive!";
    }

    @Get('/shutdown')
    async shutdown() {
        if (this.server) {
            this.server.isActive = false;
            return "Call shutdown...";
        } else {
            return new InternalServerError("Server not defined!")
        }
    }
}
