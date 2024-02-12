
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1060&t=st=1707564827~exp=1707565427~hmac=83d5b4b82203ad2d0f7ccd6dc26026ec79eac04a07112163cb971191dcf39eff"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
           
              Music
           
          </span>
          <span className="postCat">
          
              Life
            
          </span>
        </div>
        <span className="postTitle text-black">
          
            Lorem ipsum dolor sit amet
          
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}