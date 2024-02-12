import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Navbar"
import Posts from "../../Components/Posts/Posts"
import Sidebar from "../../Components/sidebar/Sidebar"
import "./home.css"

function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="home">
       <Posts/>
       <Sidebar/>
       
    </div>
    <Footer/>
    </>
  )
}

export default Home