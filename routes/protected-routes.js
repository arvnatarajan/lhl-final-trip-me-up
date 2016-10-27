"use strict";

require('dotenv').config();

const express     = require('express');
const router      = express.Router();
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const JWT_SECRET  = process.env.JWT_SECRET;

module.exports = (knex) => {


}
