exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('trips', function(table){
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users');
      table.date('trip_start');
      table.date('trip_end');
      table.string('trip_title')
      table.string('trip_start_location');
      table.string('trip_destination');
      table.string('trip_img_url');
      table.string('trip_description');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('trips')
  ]);
};