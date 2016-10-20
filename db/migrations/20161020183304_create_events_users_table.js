exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('events_users', function(table){
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users');
      table.integer('event_id').references('id').inTable('events');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('events_users')
  ]);
};