import './App.css'
import Architecture from './layouts/Architecture/Architecture'
import DataAnalysis from './layouts/DataAnalysis/DataAnalysis'
import DesignSystem from './layouts/DesignSystem/DesignSystem'
import Footer from './layouts/Footer/Footer'
import Hero from './layouts/Hero/Hero'
import Intro from './layouts/Intro/Intro'
import Nav from './layouts/Nav/Nav'
import Recommendation from './layouts/Recommendation/Recommendation'

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
