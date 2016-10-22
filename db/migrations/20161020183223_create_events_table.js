exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('events', function(table){
      table.increments('id').primary();
      table.integer('day_id').references('id').inTable('days');
      table.time('start_time');
      table.time('end_time');
      table.string('event_title');
      table.string('event_description');
      table.string('event_type');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('events')
  ]);
};