import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import WorkDetail from './components/work/WorkDetail'

const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/work' element={<WorkDetail />}></Route>
        </Routes>
      </Main>
      <Footer />
    </div>
  )
}

export default App