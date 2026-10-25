import React from 'react'
import { memo } from 'react'


function ChildA() {
    conslole.log("ChildA Called")
  return (
    <div>
        child A
    </div>
  )
}

export default memo(ChildA)