import { useSelector, useDispatch } from "react-redux";
import { allPosts, getStatuse, getErrors, fetchPosts } from "../../redux/postsSlice";
import './Posts.scss';
import Author from "../user/Author";
import { formatDistance } from "date-fns";
import ReactionButtons from "../buttons/ReactionButtons";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
    // const dispatch = useDispatch();
    const status = useSelector(getStatuse);
    // useEffect(()=>{
    //         dispatch(fetchPosts());
    // },[dispatch]);
    const posts = useSelector(allPosts);
    const errors = useSelector(getErrors);

    const dateFormat = (date)=>{
        return formatDistance(new Date(date), new Date(), {addSuffix: true});
    }

    let renderedPosts;
    if(status === 'loading'){
        renderedPosts = <p>Loading ...</p>
    }else if(status === 'idle'){
        const orderedPosts = posts.slice().sort((a,b) => new Date(b.date) - new Date(a.date));
        renderedPosts = orderedPosts.map(post => (
            <div key={post._id} className='post'>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <Author userId={post.userId}/>
                <span style={{fontSize:'0.8rem'}}>{dateFormat(post.date)}</span>
                <ReactionButtons post={post}/>
                <Link className='link-style' to={`/posts/singlepost/${post._id}`}>View Post</Link> |
                <Link className='link-style' to={`/posts/edit/${post._id}`}>Edit Post</Link>
            </div>
        ));
    }else if(status === 'failed'){
        renderedPosts = errors.map((err,i) => (
            <p key={i}>{err}</p>
        ));
    }
    
    return ( 
    <section className="post-container">
        <h1>Posts</h1>
        {renderedPosts}
        <Outlet />
    </section>
    );
}
 
export default Posts;