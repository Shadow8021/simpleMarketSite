import './App.css'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero/Hero'
import Produits from './components/Produits/Produits'
function App() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Produits/>
      <Footer/>
    </div>
  )
}

export default App
