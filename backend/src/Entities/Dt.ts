import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity("dt_money-doc")
export class Dt {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    type: string;

    @Column()
    category: string;

    @Column()
    amount: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = v4();
        }
    }
}