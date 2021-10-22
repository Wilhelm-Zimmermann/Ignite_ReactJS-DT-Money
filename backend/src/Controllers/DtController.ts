import { Request, Response } from "express";
import { container } from "tsyringe";
import { DtService } from "../Services/DtService";


export class DtController {

    async create(req: Request, res: Response): Promise<Response> {
        const { title, type, category, amount } = req.body;
        const dtService = container.resolve(DtService);
        await dtService.create({
            title,
            type,
            category,
            amount
        });

        return res.status(201).json({
            msg: "Object Inserted"
        });
    }

    async findAll(req: Request, res: Response): Promise<Response> {
        const dtService = container.resolve(DtService)
        const transactions = await dtService.findAll();

        return res.status(200).json({
            transactions
        });
    }
}