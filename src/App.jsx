import {createBrowserRouter} from 'react-router-dom';
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,

  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas
} from './components'

function App() {
 
  return (
    <>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
  
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>

    </>
  )
}

export default App
