const React = require('react')
const _ = require('lodash')

//components
const DetailsRow = require('./details-row')
const TimeTableRow = require('./time-table-row')

module.exports = function App (props) {
  // console.log('src/app.js props', props)
  const { store, state } = props
  const { timetable, details, periodKey, dayKey } = state
  // console.log('src/app.js timetable', timetable)

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
              {timetable.map((tableCells,index)=>
                <TimeTableRow tableCells = {tableCells}
                periodKey={1} store = {store} dayKey ={index+1}/>)}
            </tr>
            <DetailsRow details = {details} store = {store}/>
            <tr>
              <td>second</td>
                {timetable.map((tableCells,index)=>
                  <TimeTableRow tableCells = {tableCells}
                  periodKey={2} store = {store} dayKey ={index+1}/>)}
            </tr>
            <tr>
              <td>third</td>
                {timetable.map((tableCells, index)=>
                  <TimeTableRow tableCells = {tableCells}
                  periodKey={3} store = {store} dayKey ={index+1}/>)}
            </tr>
            <tr>
              <td>Lunch</td>
            </tr>
            <tr>
              <td>fourth</td>
                {timetable.map((tableCells, index)=>
                  <TimeTableRow tableCells = {tableCells}
                  periodKey={4} store = {store} dayKey ={index+1}/>)}
            </tr>
            <tr>
              <td>fifth</td>
                {timetable.map((tableCells, index)=>
                  <TimeTableRow tableCells = {tableCells}
                  periodKey={5} store = {store} dayKey ={index+1}/>)}
            </tr>

          </tbody>
        </table>

    </div>
  )
}
