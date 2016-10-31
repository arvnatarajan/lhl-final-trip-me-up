
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').returning('id').insert({id:0, first_name: 'tintin', last_name: '',              email: 'tintin', password_salted:'tintin', homebase:'toronto'}),
        knex('users').returning('id').insert({id:1, first_name: 'dora',   last_name: 'the explorer',  email: 'dora',   password_salted:'dora', homebase:'toronto'})
      ]);
    })
    .then(function (userIds) {
      return knex('trips').del()
      .then(function(){
        return Promise.all([
          knex('trips').returning('id').insert({id:0, trip_title:'my trip!', trip_start: '11/04/2016', trip_end: '11/06/2011', user_id:Number(userIds[0]), trip_start_location: 'manitowoc county', trip_destination: 'moon',             trip_img_url:'http://i64.tinypic.com/2mq7wya.jpg'}),
          knex('trips').returning('id').insert({id:1, trip_title:'my trip!', trip_start: '11/04/2016', trip_end: '11/06/2011', user_id:Number(userIds[0]), trip_start_location: 'bottom',           trip_destination: 'now we here',      trip_img_url:'http://i64.tinypic.com/5dmipj.jpg'}),
          knex('trips').returning('id').insert({id:2, trip_title:'my trip!', trip_start: '11/04/2016', trip_end: '11/06/2011', user_id:Number(userIds[0]), trip_start_location: 'chicago',          trip_destination: 'new york',         trip_img_url:'http://i64.tinypic.com/5dmipj.jpg'}),
          knex('trips').returning('id').insert({id:3, trip_title:'my trip!', trip_start: '11/04/2016', trip_end: '11/06/2011', user_id:Number(userIds[0]), trip_start_location: 'bottom',           trip_destination: 'the red sea',      trip_img_url:'http://i64.tinypic.com/2i8c4za.jpg'}),
          knex('trips').returning('id').insert({id:4, trip_title:'my trip!', trip_start: '11/04/2016', trip_end: '11/06/2011', user_id:Number(userIds[1]), trip_start_location: 'north pole',       trip_destination: 'coney island',     trip_img_url:'http://i64.tinypic.com/2mq7wya.jpg'}),
          knex('trips').returning('id').insert({id:5, trip_title:'my trip!', trip_start: '11/04/2016', trip_end: '11/06/2011', user_id:Number(userIds[1]), trip_start_location: 'mordor',           trip_destination: 'blueberry hill',   trip_img_url:'http://i65.tinypic.com/34i332x.jpg'}),
          knex('trips').returning('id').insert({id:6, trip_title:'my trip!', trip_start: '11/04/2016', trip_end: '11/06/2011', user_id:Number(userIds[1]), trip_start_location: 'atlantis',         trip_destination: 'purple planet',    trip_img_url:'http://i64.tinypic.com/2mq7wya.jpg'}),
          knex('trips').returning('id').insert({id:7, trip_title:'my trip!', trip_start: '11/04/2016', trip_end: '11/06/2011', user_id:Number(userIds[1]), trip_start_location: 'alpha centauri',   trip_destination: 'castle of dreams', trip_img_url:'http://i64.tinypic.com/5dmipj.jpg'})
        ]);
      })
    })
    .then(function (tripIds) {
      return knex('days').del()
      .then(function(){
        return Promise.all([
          knex('days').returning('id').insert({id:0,  date: '11/04/2011', trip_id:Number(tripIds[0]), day_start_location: 'manitowoc county', day_end_location: 'moon'       }),
          knex('days').returning('id').insert({id:1,  date: '11/05/2011', trip_id:Number(tripIds[0]), day_start_location: 'moon',             day_end_location: ''           }),
          knex('days').returning('id').insert({id:2,  date: '11/06/2011', trip_id:Number(tripIds[0]), day_start_location: 'moon',             day_end_location: 'mordor'     }),
          knex('days').returning('id').insert({id:3,  date: '11/04/2011', trip_id:Number(tripIds[1]), day_start_location: 'bottom',           day_end_location: 'now we here'}),
          knex('days').returning('id').insert({id:4,  date: '11/05/2011', trip_id:Number(tripIds[1]), day_start_location: 'now we here',      day_end_location: 'toronto',   }),
          knex('days').returning('id').insert({id:5,  date: '11/06/2011', trip_id:Number(tripIds[1]), day_start_location: 'toronto',          day_end_location: 'london',    }),
          knex('days').returning('id').insert({id:6,  date: '11/04/2011', trip_id:Number(tripIds[2]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:7,  date: '11/05/2011', trip_id:Number(tripIds[2]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:8,  date: '11/06/2011', trip_id:Number(tripIds[2]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:9,  date: '11/04/2011', trip_id:Number(tripIds[3]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:10, date: '11/05/2011', trip_id:Number(tripIds[3]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:11, date: '11/06/2011', trip_id:Number(tripIds[3]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:12, date: '11/04/2011', trip_id:Number(tripIds[4]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:13, date: '11/05/2011', trip_id:Number(tripIds[4]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:14, date: '11/06/2011', trip_id:Number(tripIds[4]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:15, date: '11/04/2011', trip_id:Number(tripIds[5]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:16, date: '11/05/2011', trip_id:Number(tripIds[5]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:17, date: '11/06/2011', trip_id:Number(tripIds[5]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:18, date: '11/04/2011', trip_id:Number(tripIds[6]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:19, date: '11/05/2011', trip_id:Number(tripIds[6]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:20, date: '11/06/2011', trip_id:Number(tripIds[6]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:21, date: '11/04/2011', trip_id:Number(tripIds[7]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:22, date: '11/05/2011', trip_id:Number(tripIds[7]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:23, date: '11/06/2011', trip_id:Number(tripIds[7]), day_start_location: '',                 day_end_location: ''           }),
          knex('days').returning('id').insert({id:24, date: '11/06/2011', trip_id:Number(tripIds[0]), day_start_location: 'mordor',           day_end_location: 'manitowoc county'})

        ]);
      })
    })
};
