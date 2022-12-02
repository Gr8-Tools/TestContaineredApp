import {Controller, Get, Param} from "routing-controllers";
import {EnvVar} from "../../utils/environment-variables";
import * as fs from "fs";

@Controller("/secrets")
export class SecretsController {

    @Get('/')
    isAlive(){
       return "Secret controller is alive"
    }

    @Get('/:id')
    getSecret(@Param('id') secretKey: string) {
        return EnvVar.getString(secretKey);
    }

    @Get('/files/:id')
    getFileSecret(@Param('id') path: string) {
        const result = fs.readFileSync(EnvVar.getString(path), 'utf-8')
        return result;
    }
}
