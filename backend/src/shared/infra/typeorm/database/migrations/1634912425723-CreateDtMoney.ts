import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDtMoney1634912425723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "dt_money-doc",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "type",
                        type: "varchar",
                    },
                    {
                        name: "category",
                        type: "varchar",
                    },
                    {
                        name: "amount",
                        type: "numeric",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("dt_money-doc")
    }

}
