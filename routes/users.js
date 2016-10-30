"use strict";

require('dotenv').config();

const express     = require('express');
const router      = express.Router();
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const JWT_SECRET  = process.env.JWT_SECRET;

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

  //get all notifcations from a user
  router.get("/:user_id/notifications", (req, res) => {
    let u_id = req.params.user_id
    knex
    .select("*")
    .from("notifications")
    .where('user_id', u_id)
    .then((results) => {
      res.json(results);
    });
  });

  router.get("/:user_id/delete-notifications", (req, res) => {
    let u_id = req.params.user_id
    knex
    .select("*")
    .from("notifications")
    .where('user_id', u_id)
    .del()
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
      trip_destination: req.body.trip_destination,
      trip_img_url: req.body.trip_img_url
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
      trip_id: req.body.trip_id,
      date: req.body.date
    })
    .then((results) => {
      res.json(results)
    })
  });

  router.post("/events/new", (req, res) => {
    knex('events')
    .returning(['id', 'day_id', 'start_time', 'end_time', 'event_title', 'event_title', 'event_description', 'event_type'])
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


  router.get("/delete-events/:id", (req, res) => {
    let e_id = req.params.id
    knex('events')
    .where('id', e_id)
    .del()
    .then((results) => {
      res.json(e_id);
    })
  });

  router.post("/sessions/create", (req, res) => {
    checkForUser(req, (results) => {
      if (!results[0]) {
        return res.status(401).send({message: "User does not exist"})
      } else {
        return res.status(201).send({
          user_id: results[0].id,
          user: results[0]
        })
      }
    })
  })


  router.get("/notifications", (req, res) => {
    console.log('asdfsad')
    knex('notifications')
    .returning('user_id')
    .insert({
      user_id: req.body.user_id,
      notification_type: req.body.notification_type,
      notification_message: req.body.notification_message,
    })
    .then((results) => {
      res.json(results)
    })
  })

  router.post("/notifications/new", (req, res) => {
    knex('notifications')
    .returning('user_id')
    .insert({
      user_id: req.body.user_id,
      notification_type: req.body.notification_type,
      notification_message: req.body.notification_message,
    })
    .then((results) => {
      res.json(results)
    })
  })


  function checkForUser(req, _done) {
    knex('users')
    .returning('*')
    .select('*')
    .where('email', req.body.email)
    .andWhere('password_salted', req.body.password)
    .then(_done)
  }

  return router;
}



// for later implementation
// function createToken(user) {
//   return jwt.sign(_.omit(user, 'password_salted'), JWT_SECRET, { expiresIn: 60*60*5 });
// }
