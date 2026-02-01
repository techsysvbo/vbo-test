import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/opportunities', async (req, res) => {
    const opps = await prisma.opportunity.findMany({
        orderBy: { createdAt: 'desc' }
    });
    res.json(opps);
});

app.post('/api/opportunities', async (req, res) => {
    try {
        const opp = await prisma.opportunity.create({
            data: req.body
        });
        res.json(opp);
    } catch (err) {
        res.status(400).json({ error: 'Invalid input' });
    }
});

app.get('/api/opportunities/:id', async (req, res) => {
    const opp = await prisma.opportunity.findUnique({
        where: { id: req.params.id }
    });
    if (!opp) return res.status(404).json({ error: 'Not found' });
    res.json(opp);
});

app.patch('/api/opportunities/:id', async (req, res) => {
    try {
        const opp = await prisma.opportunity.update({
            where: { id: req.params.id },
            data: req.body
        });
        res.json(opp);
    } catch (err) {
        res.status(400).json({ error: 'Invalid input' });
    }
});

app.listen(port, () => {
    console.log(`Opportunities service running at http://localhost:${port}`);
});
