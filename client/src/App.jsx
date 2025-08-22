import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
      <Router>
        <Header/>
          <main className='py-3'>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/properties' element={<PropertiesPage/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
            <ToastContainer theme="dark"/> 
          </main>
        <Footer/>
      </Router>
    </>
  )

}

export default App