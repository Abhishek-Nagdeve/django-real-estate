import './App.css'
import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import AppFooter from './components/common/AppFooter'
import AppHeader from './components/common/AppHeader'
import HomePage from './pages/HomePage'
import PropertyListPage from './pages/PropertyListPage'

const {Content , Header ,Footer} = Layout

function App() {

  return (
    <Router>
      <Layout className='main-layout'>
        <Header>
          <AppHeader/>
        </Header>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/properties" element={<PropertyListPage/>}/>
          </Routes>
          <AppFooter/>
      </Layout>
    </Router>
  )
}

export default App
