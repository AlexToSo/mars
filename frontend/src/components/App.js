import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.jpg'
import Footer from './Footer'

function App() {
  return (
    <div>
			<Banner>
				<img src={logo} alt='logo-mars' className='mars-logo' />
				<h1 className='mars-title'>MARS</h1>
			</Banner>
			<div className='mars-layout'>
				
			</div>
			<Footer />
		</div>
  )
}

export default App