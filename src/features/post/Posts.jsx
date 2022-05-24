import { useSelector } from "react-redux";
import './Posts.scss';
import Author from "../user/Author";
import { formatDistance } from "date-fns";
import ReactionButtons from "../buttons/ReactionButtons";

const Posts = () => {
    const posts = useSelector(state => state.posts);
    const dateFormat = (date)=>{
        return formatDistance(date, new Date(), {addSuffix: true});
    }
    const orderedPosts = posts.slice().sort((a,b) => b.date - a.date);
    const renderedPosts = orderedPosts.map(post => (
        <div key={post.id} className='post'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Author userId={post.userId}/>
            <span style={{fontSize:'0.8rem'}}>{dateFormat(post.date)}</span>
            <ReactionButtons post={post}/>
        </div>
    ));
    return ( 
    <section className="post-container">
        <h2>Posts</h2>
        {renderedPosts}
    </section>
    );
}
 
export default Posts;