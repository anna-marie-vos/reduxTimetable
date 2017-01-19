const React = require('react')

module.exports = function (props) {
  console.log('time-table-cell.js', props );
  const { tableCells, store, periodKey } = props
  const { period, subject, details, classroom, teacher, id } = tableCells
  // console.log('time-table-cell.js period: ', teacher);

  return (

    <td>
      <button onClick={() => store.dispatch(displayDetails(id,periodKey))}>
        {subject}
      </button>
    </td>
  )
}

function displayDetails (id, periodKey) {
  return {type: 'DISPLAY_DETAILS', payload: id, periodKey}
}
