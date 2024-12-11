import './Components.css'
import TopBarItem from './helper/TopBarItem'


const TopBar = () => {
  return (
  
    <div className='topbar'>
       <TopBarItem  src = {"./cards/AH.png"} height={60} width ={60}/>
       <TopBarItem  src = {"./cards/AH.png"} height={60} width ={60}/>
       <TopBarItem  src = {"./cards/AH.png"} height={60} width ={60}/>
       <TopBarItem  src = {"./cards/AH.png"} height={60} width ={60}/>
    </div>
     
  )
}

export default TopBar
