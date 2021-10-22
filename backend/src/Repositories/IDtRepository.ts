import { ICreateDtDto } from "../Dtos/CreateDtDTO";
import { Dt } from "../Entities/Dt";


export interface IDtRepository{
    create(data: ICreateDtDto):Promise<void>;
    findAll():Promise<Dt[]>;
}