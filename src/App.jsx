import './App.css'
import Architecture from './components/Architecture'
import DataAnalysis from './components/DataAnalysis'
import DesignSystem from './components/DesignSystem'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Recommendation from './components/Recommendation'

function App() {
  

  return (
    <>
      <Nav/>
      <Hero/>
      <Intro/>
      <DesignSystem/>
      <Recommendation/>
      <Architecture/>
      <DataAnalysis/>
      <Footer/>
    </>
  )
}

export default App
