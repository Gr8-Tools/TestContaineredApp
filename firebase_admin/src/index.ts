import {AdminServer} from "./servers/admin-server";
import {Container} from "typedi";

async function main () : Promise<void> {
    const server = await AdminServer.create();
    Container.set("server", server);
    await server.start()

    await server.work(() => !server!.isActive, 2000);
}

(async () => {
    try {
        await main();
        console.log("Finished!");
        process.exit();
    } catch (e) {
        console.error("Failed!");
        console.error(e);
    }
})();
