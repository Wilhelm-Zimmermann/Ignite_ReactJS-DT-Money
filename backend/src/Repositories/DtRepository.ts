import { getRepository, Repository } from "typeorm";
import { ICreateDtDto } from "../Dtos/CreateDtDTO";
import { Dt } from "../Entities/Dt";
import { IDtRepository } from "./IDtRepository";


export class DtRepository implements IDtRepository{

    private repository: Repository<Dt>;

    constructor(){
        this.repository = getRepository(Dt);
    }

    async create({ title, type, amount, category }: ICreateDtDto): Promise<void> {
        const dt = this.repository.create({
            title,
            amount,
            category,
            type
        });

        await this.repository.save(dt);
    }
    async findAll(): Promise<Dt[]> {
        const transactions =  await this.repository.find();
        if(transactions.length > 10){
            await this.repository.delete({
                id: transactions[0].id
            })
        }

        return transactions
    }

}