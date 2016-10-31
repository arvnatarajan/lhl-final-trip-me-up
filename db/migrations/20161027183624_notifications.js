exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('notifications', function(table){
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users');
      table.string('name');
      table.string('notification_type');
      table.string('notification_message');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('notifications')
  ]);
};
