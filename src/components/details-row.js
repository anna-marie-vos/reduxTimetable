const React = require('react')

module.exports = function (props) {
  // console.log('tdetails-row.js', props );
  const { details } = props

  // console.log('time-table-cell.js period: ', teacher);

  return (

    <tr>
      <td> Classroom: {details.classroom}
      </td>
      <td> Details: {details.details}
      </td>
      <td> Teacher: {details.teacher}
      </td>
    </tr>
  )
}

// function displayDetails (id) {
//   return {type: 'DISPLAY_DETAILS', payload: id}
// }
