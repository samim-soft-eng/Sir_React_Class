import React from 'react'
import { BrowserRouter ,Routes ,Route} from 'react-router-dom'
import About from './component/About'
import Content from './component/Content'
import Service from './component/Service'
import Navbar from './component/Navbar'
import Myerror from './component/Myerror'
import Dashboard from './Nestedfile/Dashboard'
import Profile from './Nestedfile/Profile'
import Mydynamic from './component/Mydynamic'


function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar />

       <Routes>

        // Basic Routing
        <Route path="/" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/service" element={<Service />} />
        //Universal Routing
        <Route path="*" element={<Myerror />} />

        // Nested Routing
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="profile" element={<Profile />} />
        </Route>

        //Dynamic Routing
        <Route path="/product/:id" element={<Mydynamic />} />

       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App