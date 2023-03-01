import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import logo from './assets/logo.jpg'
import './styles/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header>
        <img src={logo} alt="logo-mars" className="mars-logo" />
        <h1 className="mars-title">MARS</h1>
      </Header>
      <Routes>
        <Route exact path="/" element={Home}></Route>
        <Route path="/login" element={Login}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
