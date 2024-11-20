import express, { Router, Request, Response } from 'express'

const router = Router();

router.get('/test', (req: Request, res: Response): any => {
    // return res.json({ ok: true })
    throw new Error('Error jogador')
});

export { router }