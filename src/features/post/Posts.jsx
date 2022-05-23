import { useSelector } from "react-redux";
import './Posts.scss';

const Posts = () => {
    const posts = useSelector(state => state.posts);
    const renderedPosts = posts.map(post => (
        <div key={post.id} className='post'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
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