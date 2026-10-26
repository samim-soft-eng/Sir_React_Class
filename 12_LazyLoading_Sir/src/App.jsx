import React from 'react'
import { Suspense } from 'react'


const Mylazy = React.lazy(() => import("./compotent/Mydata.jsx"))

function App() {

  return (
    <div>
      <Suspense fallback="Loadding....">
        <Mylazy />
      </Suspense>  
    </div>
  )
}

export default App