"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UseController = require('./app/controllers/UseController'); var _UseController2 = _interopRequireDefault(_UseController);

const routes = new (0, _express.Router)();

routes.get('/', _UseController2.default.getCharacters);

exports. default = routes;
