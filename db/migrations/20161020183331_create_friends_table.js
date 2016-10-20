exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('friends', function(table){
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users');
      table.string('friend_id');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('friends')
  ]);
};