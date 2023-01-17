import React from 'react'
import NewsCard from './Components/NewsCard';
import Navbar from './Components/Navbar';
import "./Components/Newscard.css";
import Readmore from './pages/Readmore';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Global from './Components/Global';
export default function App() {
 
  return (
    <div className='container'>
      <BrowserRouter>
      <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/global/:id' element={<Global/>}/>
  <Route path='/readmore/:id' element={<Readmore/>}/>  
  </Routes>
</BrowserRouter>
    </div>  
  )
}