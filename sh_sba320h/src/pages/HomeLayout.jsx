import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import './pages.css'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <div className='home'>
         <TopBar/>

         <Outlet/>
        
         <Footer />
    </div>
  )
}

export default HomeLayout
