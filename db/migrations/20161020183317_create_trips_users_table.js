exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('trips_users', function(table){
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users');
      table.integer('trip_id').references('id').inTable('trips');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('trips_users')
  ]);
};