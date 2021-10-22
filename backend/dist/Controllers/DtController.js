"use strict";

exports.__esModule = true;
exports.DtController = void 0;

var _tsyringe = require("tsyringe");

var _DtService = require("../Services/DtService");

class DtController {
  async create(req, res) {
    const {
      title,
      type,
      category,
      amount
    } = req.body;

    const dtService = _tsyringe.container.resolve(_DtService.DtService);

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

  async findAll(req, res) {
    const dtService = _tsyringe.container.resolve(_DtService.DtService);

    const transactions = await dtService.findAll();
    return res.status(200).json({
      transactions
    });
  }

}

exports.DtController = DtController;