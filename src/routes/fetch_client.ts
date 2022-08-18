import express from 'express';
import { Client } from '../entities/Client';
import { createQueryBuilder } from "typeorm"
const router = express.Router();


router.get('/api/clients', async (req, res) => {
    const client = await createQueryBuilder("client")
        .select("client")
        .from(Client, "client")
        .leftJoinAndSelect(
            'client.transactions',
            'transactions'
        )
        .where("client.id=:clientId", { clientId: 2 })
        .getOne();
    return res.json(client);
});


export {
    router as fetchClientRouter
}