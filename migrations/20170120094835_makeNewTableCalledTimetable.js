exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('timetable', function (table) {
    table.increments();
    table.string('day');
    table.string('period');
    table.string('subject');
    table.string('teacher');
    table.string('classroom');
    table.string('details');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('timetable');
};
