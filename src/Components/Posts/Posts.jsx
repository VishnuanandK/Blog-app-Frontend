import { Link } from "react-router-dom"
import Post from "../Post/Post"
import "./posts.css"

function Posts() {
  return (
    <div className="posts">
        <Link to={'/singlepost'} style={{textDecoration:'none'}} ><Post/></Link>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts