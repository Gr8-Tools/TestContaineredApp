import {assertInt, assertNonNullable} from "./assertions";

export class EnvVar {
    static getString(key: keyof NodeJS.ProcessEnv) : string {
        const envVar = process.env[key];

        assertNonNullable(key.toString(), envVar);

        return envVar;
    }

    static getInt(key: keyof NodeJS.ProcessEnv) : number {
        const keyName = key.toString();

        const envVar = process.env[key];
        assertNonNullable(keyName, envVar);

        const result = parseInt(envVar);
        assertInt(keyName, result);

        return result;
    }
}
