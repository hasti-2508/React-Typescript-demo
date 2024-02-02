import React from 'react'

type prop = {
    children: React.ReactNode //can pass component as child
}

function Heading({children}:prop) {
  return (
    <div>
        {children}
    </div>
  )
}

export default Heading
