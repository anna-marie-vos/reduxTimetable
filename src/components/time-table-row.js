const React = require('react')

module.exports = function (props) {
  // console.log('time-table-cell.js', props );
  const { tableCells, store, periodKey, dayKey } = props
  const { period, subject, details, classroom, teacher, id } = tableCells
  // console.log('time-table-cell.js period: ', teacher);

  return (

    <td>
      <button onClick={() =>
        store.dispatch(displayDetails(id,periodKey, dayKey))}>
        {subject}
      </button>
    </td>
  )
}

function displayDetails (id, periodKey, dayKey) {
  return {type: 'DISPLAY_DETAILS', payload: {id, periodKey, dayKey}}
}
