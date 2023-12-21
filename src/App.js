import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from './components/layout/Main'

import Home from './pages/Home'
import WorkDetail from './components/work/WorkDetail'

const App = () => {
  return (
    <div>
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/work' element={<WorkDetail />}></Route>
        </Routes>
      </Main>
    </div>
  )
}

export default App