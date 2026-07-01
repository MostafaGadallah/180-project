import { useState } from 'react'
import './index.css'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Form from './Form'
import Filter from './Filter'
import Header from './Header'
function App() {

  return (
    <>
    <div className="main bg-[#dfe0df] min-h-screen flex flex-col items-center justify-center py-10">
      <div className="container rounded-lg p-10 bg-[#161b2f] color-[#a0a4ae] w-[80%] m-auto">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Filter />
            </>
            } />
          <Route path="/add-task" element={
            <>
              <Form />
              <Filter />
            </>
            } />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
