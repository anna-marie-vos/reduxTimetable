const clone = require('clone')
const _ = require('lodash')
//const initialState = {
//   timetable: [
//     {id: 1, day: "monday", period: 2,
//       subject: 'history', details:'history of the hobbit',
//       classroom:'102',teacher:'Jim Beam'},
//     {id: 2, day: "tuesday", period: 3,
//       subject: 'maths', details:'algebra',
//       classroom:'103',teacher:'professor plum'},
//     {id: 3, day: "Wednesday", period: 1,
//       subject: 'home room', details:'mindfulness',
//       classroom:'101',teacher:'captain jack'}
//   ]
// }


module.exports = function (state, action) {
const { payload } = action
// const {id, periodKey, dayKey} = payload
  // const newState = clone(state)
  // console.log(payload.id)
  // console.log("action in redcers.js", action)

  switch (action.type) {
    case 'DISPLAY_DETAILS':
      action.payload

    default:
      return newState
  }

  return(newState)
}
