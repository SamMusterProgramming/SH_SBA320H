
import './App.css';
import {useEffect} from 'react'
import Home from './pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Cards from './pages/Cards';
import HomeLayout from './pages/HomeLayout';
import { shuffleCard } from './ApiCalls';



function App() {

  useEffect(() => {
    shuffleCard()
  }, [])

  return (
    <Routes>
      <Route element = {<HomeLayout />}>
        <Route path='/' element={<Home />} >
          <Route path='cards' element={<Cards />} />
        </Route>
      </Route> 
    </Routes>
   
  );
}

export default App;
