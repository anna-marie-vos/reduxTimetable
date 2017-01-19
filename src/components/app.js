const React = require('react')
const _ = require('lodash')

//components
const ProductRow = require('./product-row')
const TimeTableRow = require('./time-table-row')

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
            <tr>
              <td>first</td>
                {timetable.map((tableCells)=>
                <TimeTableRow tableCells = {tableCells} store = {store}/>)}
            </tr>
            <tr>
              <td>second</td>
                {timetable.map((tableCells)=>
                <TimeTableRow tableCells = {tableCells} store = {store}/>)}
            </tr>
            <tr>
              <td>third</td>
                {timetable.map((tableCells)=>
                <TimeTableRow tableCells = {tableCells} store = {store}/>)}
            </tr>
            <tr>
              <td>Lunch</td>
            </tr>
            <tr>
              <td>fourth</td>
                {timetable.map((tableCells)=>
                <TimeTableRow tableCells = {tableCells} store = {store}/>)}
            </tr>
            <tr>
              <td>fifth</td>
                {timetable.map((tableCells)=>
                <TimeTableRow tableCells = {tableCells} store = {store}/>)}
            </tr>
            <tr>
              <td>sixth</td>
                {timetable.map((tableCells)=>
                <TimeTableRow tableCells = {tableCells} store = {store}/>)}
            </tr>
          </tbody>
        </table>

    </div>
  )
}
