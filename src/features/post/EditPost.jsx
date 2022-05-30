import { useSelector, useDispatch } from "react-redux";
import { selectSinglePost, fetchUpdatePost } from "../../redux/postsSlice";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const EditPost = () => {
    const {postId} = useParams();
    console.log(postId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const post = useSelector(state => selectSinglePost(state, postId));
    console.log(post);
    const [title, setTitle] = useState(post?.title);
    const [content, setContent] = useState(post?.content);
    const saveEdit = (e)=>{
        e.preventDefault();
        dispatch(fetchUpdatePost({
            postId,
            title,
            content
        }));
        setTitle('');
        setContent('');
        navigate('/posts');
    }
    return ( 
        <div>
            <h2>Edit Post</h2>
            <div className="form-container">
                <form action="">
                    <label htmlFor="">Title</label>
                    <input 
                    type="text" 
                    name="title" 
                    placeholder={post.title} 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                    <label htmlFor="">Content</label>
                    <input 
                    type="text" 
                    name="content" 
                    placeholder={post.content} 
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                    />
                    <input type="submit" value="Edite" onClick={saveEdit}/>
                </form>
            </div>
        </div>
     );
}
 
export default EditPost;