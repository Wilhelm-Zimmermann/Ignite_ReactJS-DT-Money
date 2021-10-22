"use strict";

exports.__esModule = true;
exports.CreateDtMoney1634912425723 = void 0;

var _typeorm = require("typeorm");

class CreateDtMoney1634912425723 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "dt_money-doc",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "title",
        type: "varchar"
      }, {
        name: "type",
        type: "varchar"
      }, {
        name: "category",
        type: "varchar"
      }, {
        name: "amount",
        type: "numeric"
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("dt_money-doc");
  }

}

exports.CreateDtMoney1634912425723 = CreateDtMoney1634912425723;