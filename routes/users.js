"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:id", (req, res) => {
    let u_id = req.params.id
    knex
      .select("*")
      .from("users")
      .where('id', u_id)
      .then((results) => {
        res.json(results);
    });
  });

  router.get("/:id/trips", (req, res) => {
    let u_id = req.params.id
    knex
      .select("*")
      .from("trips")
      .where('user_id', u_id)
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}


