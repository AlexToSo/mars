import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import NotFoundPage from './components/NotFoundPage'
import logo from './assets/logo.jpg'
import './styles/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// SI queremos imbricar rutas dentro de rutas, podemos usar useRouteMatch
// https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete/7254735-transformez-votre-application-en-single-page-application-avec-react-router
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header>
        <img src={logo} alt="logo-mars" className="mars-logo" />
        <h1 className="mars-title">MARS</h1>
      </Header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login/:number" element={<Login />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
