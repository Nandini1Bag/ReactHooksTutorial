import React from 'react'

function Title() {
  console.log('Rendering title');
  return (
    <div>CallBack Hook</div>
  )
}

export default React.memo(Title);