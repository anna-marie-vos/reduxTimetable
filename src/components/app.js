const React = require('react')
const _ = require('lodash')

//components
const ProductRow = require('./product-row')
const TimeTableRow = require('./time-table-cell')

module.exports = function App (props) {
  console.log('src/app.js props', props)
  const { store, state } = props
  const { timetable } = state
  console.log('src/app.js timetable', timetable)

  return (
    <div className="timetable">
      <h1>Timetable</h1>
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
          <td>1st</td>             
          {timetable.map((tableCells)=>
            <TimeTableRow tableCells = {tableCells} store = {store}/>)}
          </tbody>
        </table>

    </div>
  )
}
