import './helper.css'

function TopBarItem(props) {
  return (
    <div  className='topbaritem'>
       <img src={props.src} alt="" />
    </div>
  )
}

export default TopBarItem
