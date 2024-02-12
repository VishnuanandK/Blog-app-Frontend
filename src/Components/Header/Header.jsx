import "./header.css"

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Blog with</span>
            <span className="headerTitleLg">BlogSpace</span>
        </div>
        <img className="headerImg" src="https://img.freepik.com/free-photo/gorgeous-foggy-sunrise-carpathian-mountains-lovely-summer-landscape-volovets-district-purple-flowers-grassy-meadows-forested-hill-fog_661209-51.jpg?w=900&t=st=1707561806~exp=1707562406~hmac=b588387a34341e7aa3006ab799b169d852c372fc7a786cc02411c25858bc000d" alt="" />
    </div>
  )
}

export default Header