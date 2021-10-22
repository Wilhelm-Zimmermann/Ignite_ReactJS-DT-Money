"use strict";

exports.__esModule = true;
exports.default = void 0;

var _typeorm = require("typeorm");

var _default = async () => {
  const defaultOptions = await (0, _typeorm.getConnectionOptions)();
  return (0, _typeorm.createConnection)(Object.assign(defaultOptions, {
    database: defaultOptions.database
  }));
};

exports.default = _default;