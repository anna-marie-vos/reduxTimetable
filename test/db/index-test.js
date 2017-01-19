const test = require('ava')
const timetable = require('../../db/timetable')

// instantiate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)

//migrate the latest timetable database
test.beforeEach(() => {
  console.log('migrating....')
  return testKnex.migrate.latest()
    .then(() => {
      console.log('timetable....')
      return testKnex.seed.run()
    })
})

//rollback to the original state of the database
test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})

//TEST 1 - gets all the data from the timetable database
// test('find | responds with the timetable info', (t) => {
//  t.plan( )

// return db promise method here


})
