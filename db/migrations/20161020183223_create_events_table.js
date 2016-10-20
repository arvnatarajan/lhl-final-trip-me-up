exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('events', function(table){
      table.increments('id').primary();
      table.integer('day_id').references('id').inTable('days');
      table.time('start_time');
      table.time('end_time');
      table.string('title');
      table.string('description');
      table.string('type');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('events')
  ]);
};