const React = require('react')

module.exports = function (props) {
  // console.log('time-table-cell.js', props );
  const { tableCells, store } = props
  const { period, subject, details, classroom, teacher, id } = tableCells
  // console.log('time-table-cell.js period: ', teacher);

  return (

    <td>
      <button onClick={() => store.dispatch(displayDetails(id))}>
        {subject}
      </button>
    </td>
  )
}

function displayDetails (id) {
  return {type: 'DISPLAY_DETAILS', payload: id}
}
