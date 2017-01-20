const clone = require('clone')
const _ = require('lodash')


module.exports = function (state, action) {
  const newState = clone(state)
  const { payload } = action

  switch (action.type) {
    case 'DISPLAY_DETAILS':

      if (newState.dayKey != null) {
        newState.dayKey = null
        newState.periodKey = null }
      else {
        console.log(action.payload.periodKey)
        newState.dayKey = action.payload.dayKey
        newState.periodKey = action.payload.periodKey - 1
        newState.details = newState.timetable.filter(timetableObj => {
          return timetableObj.id === action.payload.id
        })[0] }

      return newState

    case 'UPDATE_TIMETABLE_STATE' :
      newState.timetable = action.payload.data
      return newState

    default:
      return newState
  }

  return newState
}
