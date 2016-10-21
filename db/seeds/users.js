
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').returning('id').insert({id:1, first_name: 'arv',     last_name: 'natarajan', email: 'test.com', password_salted:'1234', homebase:'toronto'}),
        knex('users').returning('id').insert({id:2, first_name: 'ben',     last_name: 'chu',       email: 'test.com', password_salted:'1234', homebase:'toronto'}),
        knex('users').returning('id').insert({id:3, first_name: 'barack',  last_name: 'obama',     email: 'test.com', password_salted:'1234', homebase:'toronto'}),
        knex('users').returning('id').insert({id:4, first_name: 'hillary', last_name: 'clinton',   email: 'test.com', password_salted:'1234', homebase:'toronto'}),
        knex('users').returning('id').insert({id:5, first_name: 'donald',  last_name: 'trump',     email: 'test.com', password_salted:'1234', homebase:'toronto'})

      ]);
    })
    .then(function (userIds) {
      return knex('trips').del()
      .then(function(){
        return Promise.all([
          knex('trips').returning('id').insert({id:1, title:'my trip!', start_date: '11/03/2011', end_date: '11/10/2011', user_id:Number(userIds[0]), start_location: 'london',      destination: 'new york', img_url:'blah'}),
          knex('trips').returning('id').insert({id:2, title:'my trip!', start_date: '11/03/2011', end_date: '11/10/2011', user_id:Number(userIds[0]), start_location: 'toronto',     destination: 'montreal', img_url:'blah'}),
          knex('trips').returning('id').insert({id:3, title:'my trip!', start_date: '11/03/2011', end_date: '11/10/2011', user_id:Number(userIds[0]), start_location: 'paris',       destination: 'shanghai', img_url:'blah'}),
          knex('trips').returning('id').insert({id:4, title:'my trip!', start_date: '11/03/2011', end_date: '11/10/2011', user_id:Number(userIds[1]), start_location: 'tokyo',       destination: 'dubai',    img_url:'blah'}),
          knex('trips').returning('id').insert({id:5, title:'my trip!', start_date: '11/03/2011', end_date: '11/10/2011', user_id:Number(userIds[1]), start_location: 'los angeles', destination: 'madrid',   img_url:'blah'}),
          knex('trips').returning('id').insert({id:6, title:'my trip!', start_date: '11/03/2011', end_date: '11/10/2011', user_id:Number(userIds[2]), start_location: 'toronto',     destination: 'moscow',   img_url:'blah'}),
          knex('trips').returning('id').insert({id:7, title:'my trip!', start_date: '11/03/2011', end_date: '11/10/2011', user_id:Number(userIds[3]), start_location: 'sydney',      destination: 'athens',   img_url:'blah'}),
          knex('trips').returning('id').insert({id:8, title:'my trip!', start_date: '11/03/2011', end_date: '11/10/2011', user_id:Number(userIds[3]), start_location: 'toronto',     destination: 'dallas',   img_url:'blah'})
        ]);
      })
    })
    .then(function (tripIds) {
      return knex('days').del()
      .then(function(){
        return Promise.all([
          knex('days').returning('id').insert({id:1,  date: '11/03/2011', trip_id:Number(tripIds[0]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:2,  date: '11/03/2011', trip_id:Number(tripIds[0]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:3,  date: '11/04/2011', trip_id:Number(tripIds[0]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:4,  date: '11/04/2011', trip_id:Number(tripIds[1]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:5,  date: '11/04/2011', trip_id:Number(tripIds[1]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:6,  date: '11/04/2011', trip_id:Number(tripIds[2]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:7,  date: '11/05/2011', trip_id:Number(tripIds[3]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:8,  date: '11/05/2011', trip_id:Number(tripIds[3]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:9,  date: '11/05/2011', trip_id:Number(tripIds[0]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:10, date: '11/05/2011', trip_id:Number(tripIds[0]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:11, date: '11/06/2011', trip_id:Number(tripIds[0]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:12, date: '11/06/2011', trip_id:Number(tripIds[1]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:13, date: '11/06/2011', trip_id:Number(tripIds[1]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:14, date: '11/06/2011', trip_id:Number(tripIds[2]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:15, date: '11/06/2011', trip_id:Number(tripIds[3]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:16, date: '11/06/2011', trip_id:Number(tripIds[3]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:17, date: '11/07/2011', trip_id:Number(tripIds[0]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:18, date: '11/07/2011', trip_id:Number(tripIds[0]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:19, date: '11/07/2011', trip_id:Number(tripIds[0]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:20, date: '11/07/2011', trip_id:Number(tripIds[1]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:21, date: '11/08/2011', trip_id:Number(tripIds[1]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:22, date: '11/08/2011', trip_id:Number(tripIds[2]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:23, date: '11/09/2011', trip_id:Number(tripIds[3]), start_location: 'toronto', end_location: 'london', img_url:'blah'}),
          knex('days').returning('id').insert({id:24, date: '11/10/2011', trip_id:Number(tripIds[3]), start_location: 'toronto', end_location: 'london', img_url:'blah'})
        ]);
      })
    })
    .then(function () {
         return knex('events').del()
         .then(function(){
           return Promise.all([
             knex('events').returning('id').insert({id: 1,  start_time: '13:00', end_time: '14:00', day_id: 1,  title: 'Visit the museum',  description: 'going to the musueum of dinosaurs',        type:'activity'}),
             knex('events').returning('id').insert({id: 2,  start_time: '14:00', end_time: '16:00', day_id: 1,  title: 'Tourist site',      description: 'going to see the acropolis',               type:'activity'}),
             knex('events').returning('id').insert({id: 3,  start_time: '09:00', end_time: '12:00', day_id: 2,  title: 'hilton accom',      description: 'staying at the hilton',                    type:'accomodation'}),
             knex('events').returning('id').insert({id: 4,  start_time: '13:00', end_time: '14:00', day_id: 2,  title: 'airbnb accom',      description: 'staying at the airbnb',                    type:'accomodation'}),
             knex('events').returning('id').insert({id: 5,  start_time: '16:00', end_time: '17:00', day_id: 3,  title: 'eat at restaurant', description: 'dining at resto',                          type:'meal'}),
             knex('events').returning('id').insert({id: 6,  start_time: '19:00', end_time: '22:00', day_id: 3,  title: 'watching a show',   description: 'going to see the wizard of oz',            type:'activity'}),
             knex('events').returning('id').insert({id: 7,  start_time: '13:00', end_time: '14:30', day_id: 4,  title: 'watching a movie',  description: 'going to see bourne',                      type:'activity'}),
             knex('events').returning('id').insert({id: 8,  start_time: '10:00', end_time: '14:00', day_id: 4,  title: 'eating at nobu',    description: 'going to eat at nobu',                     type:'activity'}),
             knex('events').returning('id').insert({id: 9,  start_time: '11:00', end_time: '12:00', day_id: 5,  title: 'visit the museum',  description: 'going to see the musueum of anthropology', type:'activity'}),
             knex('events').returning('id').insert({id: 10, start_time: '08:00', end_time: '10:00', day_id: 6,  title: 'drink at a bar',    description: 'going to drink at a bar',                  type:'activity'}),
             knex('events').returning('id').insert({id: 11, start_time: '10:00', end_time: '11:00', day_id: 6,  title: 'catch a plane',     description: 'plane from london to toronto',             type:'transport'}),
             knex('events').returning('id').insert({id: 12, start_time: '07:00', end_time: '14:00', day_id: 7,  title: 'catch a train',     description: 'train from a to b',                        type:'transport'}),
             knex('events').returning('id').insert({id: 13, start_time: '12:00', end_time: '14:00', day_id: 8,  title: 'ritz accom',        description: 'staying at ritz',                          type:'accomodation'}),
             knex('events').returning('id').insert({id: 14, start_time: '16:00', end_time: '18:00', day_id: 9,  title: 'ferry',             description: 'ferry from b to c',                        type:'transport'}),
             knex('events').returning('id').insert({id: 15, start_time: '16:00', end_time: '18:00', day_id: 10, title: 'visit the museum',  description: 'going to see the musueum of ajhfsdjkhf',   type:'activity'}),
             knex('events').returning('id').insert({id: 16, start_time: '15:00', end_time: '17:00', day_id: 11, title: 'drinks at bar',     description: 'drinking at bar',                          type:'activity'}),
             knex('events').returning('id').insert({id: 17, start_time: '13:00', end_time: '15:00', day_id: 12, title: 'plane trip',        description: 'plane from x to y',                        type:'activity'}),
             knex('events').returning('id').insert({id: 18, start_time: '13:00', end_time: '14:00', day_id: 13, title: 'climb mountain',    description: 'going to climb everest',                   type:'activity'}),
             knex('events').returning('id').insert({id: 19, start_time: '13:00', end_time: '15:00', day_id: 14, title: 'train trip',        description: 'train from b to a',                        type:'transport'}),
             knex('events').returning('id').insert({id: 20, start_time: '13:00', end_time: '14:00', day_id: 15, title: 'visit the museum',  description: 'going to see the musueum of ajhfsdjkhf',   type:'activity'})
           ]);
         })
       })
    .then(function () {
      return knex('events_users').del()
      .then(function(){
        return Promise.all([
          knex('events_users').returning('id').insert({id:1,  user_id:1, event_id: 1}),
          knex('events_users').returning('id').insert({id:2,  user_id:2, event_id: 2}),
          knex('events_users').returning('id').insert({id:3,  user_id:3, event_id: 3}),
          knex('events_users').returning('id').insert({id:4,  user_id:4, event_id: 4}),
          knex('events_users').returning('id').insert({id:5,  user_id:5, event_id: 5}),
          knex('events_users').returning('id').insert({id:6,  user_id:1, event_id: 6}),
          knex('events_users').returning('id').insert({id:7,  user_id:2, event_id: 7}),
          knex('events_users').returning('id').insert({id:8,  user_id:3, event_id: 8}),
          knex('events_users').returning('id').insert({id:9,  user_id:4, event_id: 9}),
          knex('events_users').returning('id').insert({id:10, user_id:1, event_id: 10}),
          knex('events_users').returning('id').insert({id:11, user_id:2, event_id: 11}),
          knex('events_users').returning('id').insert({id:12, user_id:3, event_id: 12}),
          knex('events_users').returning('id').insert({id:13, user_id:4, event_id: 13}),
          knex('events_users').returning('id').insert({id:14, user_id:5, event_id: 14}),
          knex('events_users').returning('id').insert({id:15, user_id:1, event_id: 15}),
          knex('events_users').returning('id').insert({id:16, user_id:2, event_id: 16}),
          knex('events_users').returning('id').insert({id:17, user_id:3, event_id: 17}),
          knex('events_users').returning('id').insert({id:18, user_id:4, event_id: 18}),
          knex('events_users').returning('id').insert({id:19, user_id:5, event_id: 19}),
          knex('events_users').returning('id').insert({id:20, user_id:1, event_id: 20})
        ]);
      })
    })
    .then(function () {
     return knex('trips_users').del()
     .then(function(){
       return Promise.all([
          knex('trips_users').returning('id').insert({id:1,  trip_id:1, user_id:1}),
          knex('trips_users').returning('id').insert({id:2,  trip_id:2, user_id:2}),
          knex('trips_users').returning('id').insert({id:3,  trip_id:3, user_id:3}),
          knex('trips_users').returning('id').insert({id:4,  trip_id:4, user_id:4}),
          knex('trips_users').returning('id').insert({id:5,  trip_id:5, user_id:5}),
          knex('trips_users').returning('id').insert({id:6,  trip_id:1, user_id:1}),
          knex('trips_users').returning('id').insert({id:7,  trip_id:2, user_id:2}),
          knex('trips_users').returning('id').insert({id:8,  trip_id:3, user_id:3}),
          knex('trips_users').returning('id').insert({id:9,  trip_id:4, user_id:4}),
          knex('trips_users').returning('id').insert({id:10, trip_id:1, user_id:5}),
          knex('trips_users').returning('id').insert({id:11, trip_id:2, user_id:1}),
          knex('trips_users').returning('id').insert({id:12, trip_id:3, user_id:2}),
          knex('trips_users').returning('id').insert({id:13, trip_id:4, user_id:3}),
          knex('trips_users').returning('id').insert({id:14, trip_id:5, user_id:4}),
          knex('trips_users').returning('id').insert({id:15, trip_id:1, user_id:5}),
          knex('trips_users').returning('id').insert({id:16, trip_id:2, user_id:1}),
          knex('trips_users').returning('id').insert({id:17, trip_id:3, user_id:2}),
          knex('trips_users').returning('id').insert({id:18, trip_id:4, user_id:3}),
          knex('trips_users').returning('id').insert({id:19, trip_id:5, user_id:4}),
          knex('trips_users').returning('id').insert({id:20, trip_id:1, user_id:5})
       ]);
     })
   })


};
