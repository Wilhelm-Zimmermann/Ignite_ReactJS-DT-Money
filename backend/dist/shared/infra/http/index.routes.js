"use strict";

exports.__esModule = true;
exports.router = void 0;

var _express = require("express");

var _DtController = require("../../../Controllers/DtController");

const router = (0, _express.Router)();
exports.router = router;
const dtController = new _DtController.DtController();
router.post("/create-dt", dtController.create);
router.get("/get-dt", dtController.findAll);