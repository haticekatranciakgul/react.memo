import React from 'react'

function Header() {
    console.log('render edildi')
  return (
    <div>
      HEADER
      <hr></hr>
    </div>
  )
}

export default React.memo(Header)
