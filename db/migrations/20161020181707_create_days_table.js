exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('days', function(table){
      table.increments('id').primary();
      table.integer('trip_id').references('id').inTable('trips');
      table.date('date');
      table.string('start_location');
      table.string('end_location');
      table.string('img_url');

      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('days')
  ]);
};