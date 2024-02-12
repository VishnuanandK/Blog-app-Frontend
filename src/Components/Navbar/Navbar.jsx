import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <Link to={'/write'} style={{textDecoration:'none'}}><li className="topListItem">WRITE</li></Link>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
<Link to={'/settings'}>
                <img className="topImage" src="https://img.freepik.com/free-photo/artist-white_1368-3543.jpg?size=626&ext=jpg&ga=GA1.1.1871485151.1695378604&semt=ais" alt="" />
    
</Link>        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar