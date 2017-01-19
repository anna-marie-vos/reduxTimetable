const React = require('react')

module.exports = function (props) {
  console.log('time-table-cell.js', props );
  const { tableCells, store } = props
  const { period, subject, details, classroom, teacher } = tableCells
  console.log('time-table-cell.js period: ', teacher);

  return (

    <td><button>{subject}</button></td>
  )
}

//
// function removeFromCart (productId) {
//   return {type: 'REMOVE_FROM_CART', payload: productId}
// }
