import React from 'react'

function Header( {number, data}) {
    console.log('header render edildi')
  return (
    <div>
      HEADER - {number}
      <hr></hr>

      <code>{JSON.stringify(data)}</code>
    </div>
  )
}

export default React.memo(Header)
