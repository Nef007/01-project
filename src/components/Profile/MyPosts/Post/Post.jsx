import s from "./Post.module.css";

const Post = (props) => {

  
  return <div className={s.item}>
    <img src="https://i.ytimg.com/vi/DxgFgiVIJ0g/sddefault.jpg" />
    {props.message}<div>
<span>Like {props.like_count}</span>
    </div></div>;

};

export default Post;
