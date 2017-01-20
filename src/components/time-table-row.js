const React = require('react')

module.exports = function (props) {
  const { tableCells, store, periodKey, dayKey } = props
  const { period, subject, details, classroom, teacher, id } = tableCells
  console.log("periodKey in time-table-row", periodKey);

  return (

    <td>
      <button onClick={ () =>
        store.dispatch({
          type: 'DISPLAY_DETAILS',
          payload: {id, periodKey, dayKey}
        })
      }>
        {subject}
      </button>
    </td>
  )

}
