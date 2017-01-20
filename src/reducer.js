const clone = require('clone')
const _ = require('lodash')


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
