import Author from "../user/Author";
import { useSelector } from "react-redux";
import { selectSinglePost } from "../../redux/postsSlice";
import { useParams } from "react-router-dom";
import ReactionButtons from "../buttons/ReactionButtons";

const SinglePost = () => {
    const {postId} = useParams();
    const post = useSelector(state => selectSinglePost(state, postId));
    console.log(post);
    return ( 
        <div className="singlepost-countainer">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="author-eactions">
                <Author userId={post.userId}/>
                <ReactionButtons post={post}/>
            </div>
        </div>
     );
}
 
export default SinglePost;