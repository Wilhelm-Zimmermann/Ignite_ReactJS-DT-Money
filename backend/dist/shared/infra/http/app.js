"use strict";

exports.__esModule = true;
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("../typeorm/database"));

require("reflect-metadata");

require("../../container");

var _cors = _interopRequireDefault(require("cors"));

var _index = require("./index.routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _database.default)();
const app = (0, _express.default)();
exports.app = app;
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use("/api", _index.router);
app.use((err, req, res, next) => {
  return res.status(500).json({
    error: "Internal Server Error",
    message: err.message
  });
});