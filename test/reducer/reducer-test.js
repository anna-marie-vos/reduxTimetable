const test = require('ava')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('test 1: get specific object by id', t => {
  const state = {
    timetable: [
      {id: 1, day: "monday", period: 2,
        subject: 'history', details:'history of the hobbit',
        classroom:'102',teacher:'Jim Beam'},
      {id: 2, day: "tuesday", period: 3,
        subject: 'maths', details:'algebra',
        classroom:'103',teacher:'professor plum'},
      {id: 3, day: "Wednesday", period: 1,
        subject: 'home room', details:'mindfulness',
        classroom:'101',teacher:'captain jack'}
    ],
    openRow: null
  }
  freeze(state)

  // add a banana to our cart
  const action = {type: 'DISPLAY_DETAILS', payload: 1}

  const expectedState = {
      timetable: [
        {id: 1, day: "monday", period: 2,
          subject: 'history', details:'history of the hobbit',
          classroom:'102',teacher:'Jim Beam'}
      ]
    }

  const newState = reducer(state, action)

  // redux.createStore(reducer)
  // store.dispatch(action)
  // const newState = store.getState()

  t.deepEqual(newState, expectedState, 'should update the quantity, stock, totals')
