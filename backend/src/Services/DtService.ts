import { inject, injectable } from "tsyringe";
import { ICreateDtDto } from "../Dtos/CreateDtDTO";
import { Dt } from "../Entities/Dt";
import { IDtRepository } from "../Repositories/IDtRepository";

@injectable()
export class DtService {

    constructor(
        @inject("DtRepository")
        private dtRepository: IDtRepository
    ) { }

    async findAll(): Promise<Dt[]> {
        return await this.dtRepository.findAll();
    }

    async create(data: ICreateDtDto): Promise<void> {
        await this.dtRepository.create(data);
    }
} 