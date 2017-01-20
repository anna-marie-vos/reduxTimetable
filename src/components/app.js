const React = require('react')
const _ = require('lodash')

//components
const DetailsRow = require('./details-row')
const TimeTableRow = require('./time-table-row')

module.exports = function App (props) {

  const { store, state } = props
  const { timetable, details, periodKey, dayKey } = state

  const periods = [1,2,3,'lunch', 4, 5]
  periods.splice(periodKey, 0, "details")

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
            {
              periods.map((period, i) => {
                if (period === 'details' && i != 0)  {
                  return <DetailsRow details = {details} store = {store}/>
                } else if (period === 'details' && i === 0) {
                  return
                } else if (period === 'lunch') {
                  return (
                    <tr>
                      <td>{period}</td>
                      {timetable.map((tableCells,index)=>
                      <td></td>
                    )}
                    </tr>
                  )
                } else {
                  return(
                    <tr>
                      <td>{period}</td>
                      {timetable.map((tableCells,index)=>
                      <TimeTableRow tableCells = {tableCells}
                      periodKey={i+1} store = {store} dayKey ={index+1}/>)}
                    </tr>)
                }
              })
            }

          </tbody>
        </table>

    </div>
  )
}
