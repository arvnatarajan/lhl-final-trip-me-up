"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:user_id", (req, res) => {
    let u_id = req.params.user_id
    knex
      .select("*")
      .from("users")
      .where('id', u_id)
      .then((results) => {
        res.json(results);
    });
  });

//get all trips from a user
  router.get("/:user_id/trips", (req, res) => {
    let u_id = req.params.user_id
    knex
      .select("*")
      .from("trips")
      .where('user_id', u_id)
      .orderBy('trip_start', 'desc')
      .then((results) => {
        res.json(results);
    });
  });

  router.get("/:user_id/trips/:trip_id/days", (req, res) => {
    let u_id = req.params.user_id
    let t_id = req.params.trip_id
    knex
      .select('days.id', 'date', 'day_start_location', 'day_end_location', 'day_img_url')
      .from('days')
      .join('trips', 'trips.id', '=', 'days.trip_id')
      .join('users', 'users.id', '=', 'trips.user_id')
      .where('user_id', u_id)
      .andWhere('trip_id', t_id)
      .then((results) => {
        res.json(results);
    });
  });


  router.get("/:user_id/trips/:trip_id/events", (req, res) => {
    let u_id = req.params.user_id
    let t_id = req.params.trip_id
    let d_id = req.params.day_id
    knex
      .select('day_id','events.id','event_type', 'start_time', 'end_time', 'event_description', 'event_title')
      .from('events')
      .join('days', 'days.id', '=', 'events.day_id')
      .join('trips', 'trips.id', '=', 'days.trip_id')
      .join('users', 'users.id', '=', 'trips.user_id')
      .where('user_id', u_id)
      .andWhere('trip_id', t_id)
      .then((results) => {
        res.json(results);
    });
  });

  router.post("/:user_id/trips/new", (req, res) => {
    console.log('inserting trip into database: ', req.body)
    knex('trips')
    .returning('id')
    .insert({
      user_id: req.params.user_id,
      trip_start: req.body.trip_start,
      trip_end: req.body.trip_end,
      trip_title: req.body.trip_title,
      trip_start_location: req.body.trip_start_location,
      trip_destination: req.body.trip_destination
    })
    .then((tripId) => {
      console.log(tripId)
      knex('days')
      .returning('id')
      .insert({
        trip_id: tripId[0],
        date: '11/01/2016',
        day_start_location: 'toronto'
      })
      .then(() => {
        res.json(tripId)
      });
    });
  });

  router.post("/:user_id/trips/:trip_id/days/new", (req, res) => {
    knex('days')
    .returning('id')
    .insert({
      trip_id: req.params.trip_id,
      date: req.body.date,
      day_start_location: req.body.day_start_location,
      day_end_location: req.body.day_end_location,
      day_img_url: req.body.day_img_url
    })
    .then((results) => {
      res.json(results)
    })
  });

  router.post("/events/new", (req, res) => {
    knex('events')
    .returning('id')
    .insert({
      day_id: req.body.day_id,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      event_title: req.body.event_title,
      event_description: req.body.event_description,
      event_type: req.body.event_type
    })
    .then((results) => {
      res.json(results)
    })
  });

  router.get("/events/:id", (req, res) => {
    let e_id = req.params.id
    knex
    .select('*')
    .from('events')
    .where('id', e_id)
    .then((results) => {
      res.json(results);
    })
  });



  return router;
}
