import React from 'react'

function Header( {number, increment}) {
    console.log('header render edildi')
  return (
    <div>
      HEADER - {number}
      <hr></hr>
      <br></br>
      <button onClick={increment}>Click</button>
    </div>
  )
}

export default React.memo(Header)
