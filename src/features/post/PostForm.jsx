import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { postAdded } from "../../redux/postsSlice";
import './PostForm.scss';

const PostForm = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const count = posts.length;
    const [title, setTiltle] = useState('');
    const [content, setContent] = useState('');
    const onSavePost = (e)=>{
        e.preventDefault();
        if(title && content){
            dispatch(postAdded({
                id: count + 1,
                title,
                content
            }));
            setTiltle('');
            setContent('');
        }
    }
    return ( 
        <section className="post-form">
            <h2>Add a New Post</h2>
            <form action="" >
                <label htmlFor="postTitle">Tiltle:</label>
                <input 
                id="postTitle"
                type="text"
                name="title" 
                value={title}
                onChange={(e)=>setTiltle(e.target.value)}
                />
                <label htmlFor="postContent">Content:</label>
                <input
                id="postContent" 
                type="text" 
                name="content"
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                />
                <input type="button" value="Save Post" onClick={onSavePost}/>
            </form>
        </section>
     );
}
 
export default PostForm;
