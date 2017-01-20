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
  const newState = clone(state)
  const { payload } = action

  switch (action.type) {
    case 'DISPLAY_DETAILS':
      newState.dayKey = action.payload.dayKey
      newState.periodKey = action.payload.periodKey

      newState.details = newState.timetable.filter(timetableObj => {
        console.log("this is action.id:", action.payload.id);
        return timetableObj.id === action.payload.id
      })[0]

      console.log("newState.details here: ", newState.details);

      return newState

    default:
      return newState
  }

  return newState
}
