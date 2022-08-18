import express from 'express';
import { Client } from '../entities/Client';

const router = express.Router();



router.post("/api/client", async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance
    } = req.body;
    try {
        const client = Client.create({
            first_name: firstName,
            last_name: lastName,
            email,
            card_number: cardNumber,
            balance
        });

        await client.save();
        res.json(client)
    } catch (error) {
        console.log(error);
        res.json({ error: error });

    }
});


export {
    router as createClientRouter
}