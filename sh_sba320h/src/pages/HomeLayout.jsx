import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import './pages.css'

const HomeLayout = () => {
  return (
    <div className='home'>
         <TopBar/>
         
         <Outlet/>
    </div>
  )
}

export default HomeLayout
