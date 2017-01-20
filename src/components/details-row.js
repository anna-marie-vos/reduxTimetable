const React = require('react')

module.exports = function (props) {
  const { details } = props

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
