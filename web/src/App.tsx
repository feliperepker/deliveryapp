import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import './style.scss'
import { Routes, Route, Link } from 'react-router-dom'
import { PgFibras } from "./components/PgFibras"
import { PgJacto } from "./components/PgJacto"
import { PgGrades } from "./components/PgGrades"
import { PgBateria } from "./components/PgBateria"
import { PgTanque } from "./components/PgTanque"


function App() {
  return (
    <div>
      <Header/>
      <div className="container-first">
        
        <Routes>
          <Route path="/Tanque" element={<PgTanque/>}/>
          <Route path="/Bateria" element={<PgBateria/>}/>
          <Route path="/Grades" element={<PgGrades/>}/>
          <Route path="/Fibras" element={<PgFibras/>}/>
          <Route path="/" element={<PgJacto/>}/>
        </Routes>
       </div>  
      <Footer/>
    </div>
    
    
  )
}


export default App
