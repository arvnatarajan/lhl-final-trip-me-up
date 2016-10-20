exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('trips', function(table){
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users');
      table.date('start_date');
      table.date('end_date');
      table.string('start_location');
      table.string('destination');
      table.string('img_url');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('trips')
  ]);
};