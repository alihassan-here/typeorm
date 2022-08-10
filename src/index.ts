import { createConnection } from 'typeorm';
import { Client } from "./entities/Client";

const main = async () => {
    try {
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "",
            database: "postGres",
            entities: [Client],
            synchronize: true
        });
        console.log("Connected to Postgres");

    } catch (error) {
        console.log(error);
        throw new Error("Unable to connect to Postgres")

    }
}

main();