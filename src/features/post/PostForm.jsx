import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { saveNewPost } from "../../redux/postsSlice";
import './PostForm.scss';
import { allUsers, fetchUsers } from "../../redux/usersSlice";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers());
    }, [dispatch]);
    const users = useSelector(allUsers);
    const [title, setTiltle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const onSavePost = (e)=>{
        e.preventDefault();
        if(title && content){
            dispatch(saveNewPost({
                title,
                content,
                userId,
                // date: new Date().toISOString(),
                // reactions:{
                //     like:0,
                //     dislike:0
                // }
            }));
            setTiltle('');
            setContent('');
            setUserId('');
            navigate('/posts');
        }
    }

    const userOptions = users.map(user => (
        <option value={user._id} key={user._id}>{`${user.fname} ${user.lname}`}</option>
    ));

    const savePost = Boolean(title) && Boolean(content) && Boolean(userId);

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
                <select id="postAuthor" value={userId} onChange={(e)=>setUserId(e.target.value)}>
                    <option value="">Select an Author</option>
                    {userOptions}
                </select>
                <input type="button" value="Save Post" onClick={onSavePost} disabled={!savePost}/>
            </form>
        </section>
     );
}
 
export default PostForm;
