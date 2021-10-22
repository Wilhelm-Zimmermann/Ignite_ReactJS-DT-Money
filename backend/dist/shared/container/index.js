"use strict";

var _tsyringe = require("tsyringe");

var _DtRepository = require("../../Repositories/DtRepository");

_tsyringe.container.registerSingleton("DtRepository", _DtRepository.DtRepository);