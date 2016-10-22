exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('days', function(table){
      table.increments('id').primary();
      table.integer('trip_id').references('id').inTable('trips');
      table.date('date');
      table.string('day_start_location');
      table.string('day_end_location');
      table.string('day_img_url');

      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('days')
  ]);
};