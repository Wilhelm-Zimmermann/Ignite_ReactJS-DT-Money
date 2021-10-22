"use strict";

exports.__esModule = true;
exports.DtService = void 0;

var _tsyringe = require("tsyringe");

var _IDtRepository = require("../Repositories/IDtRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let DtService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("DtRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IDtRepository.IDtRepository === "undefined" ? Object : _IDtRepository.IDtRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DtService {
  constructor(dtRepository) {
    this.dtRepository = dtRepository;
  }

  async findAll() {
    return await this.dtRepository.findAll();
  }

  async create(data) {
    await this.dtRepository.create(data);
  }

}) || _class) || _class) || _class) || _class);
exports.DtService = DtService;