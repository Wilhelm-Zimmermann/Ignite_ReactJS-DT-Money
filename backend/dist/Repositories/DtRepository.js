"use strict";

exports.__esModule = true;
exports.DtRepository = void 0;

var _typeorm = require("typeorm");

var _Dt = require("../Entities/Dt");

class DtRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Dt.Dt);
  }

  async create({
    title,
    type,
    amount,
    category
  }) {
    const dt = this.repository.create({
      title,
      amount,
      category,
      type
    });
    await this.repository.save(dt);
  }

  async findAll() {
    const transactions = await this.repository.find();

    if (transactions.length > 10) {
      await this.repository.delete({
        id: transactions[0].id
      });
    }

    return transactions;
  }

}

exports.DtRepository = DtRepository;