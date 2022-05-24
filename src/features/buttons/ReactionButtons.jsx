import { useDispatch } from "react-redux";
import './ReactionButtons.scss';
import { reactionAdded } from "../../redux/postsSlice";

const ReactionButtons = ({post}) => {
    const reactionEmojis = {
        like: '👍',
        dislike: '👎'
    }
    const dispatch = useDispatch();
    const buttons = Object.entries(reactionEmojis).map(([name, emoji]) => (
        <button key={name} onClick={()=>dispatch(reactionAdded({postId: post.id, reaction: name}))}>
            {emoji} {post.reactions[name]}
        </button>
    ));
    return ( 
        <div className="buttons-container">{buttons}</div>
     );
}
 
export default ReactionButtons;