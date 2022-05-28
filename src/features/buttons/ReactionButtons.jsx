import { useDispatch } from "react-redux";
import './ReactionButtons.scss';
import { fetchReactions, reactionAdded } from "../../redux/postsSlice";
import { useState } from "react";

const ReactionButtons = ({post}) => {
    const reactionEmojis = {
        like: '👍',
        dislike: '👎'
    }

    const [like, setLike] = useState(post.reactions.like);
    const [dislike, setDislike] = useState(post.reactions.dislike);
    
    const reactionHandler = (name, post)=> {
        dispatch(fetchReactions({postId: post._id, reaction: name}));
        if(name == 'like'){
            setLike(like + 1);
        }else if(name == 'dislike'){
            setDislike(dislike + 1)
        }
    }


    const dispatch = useDispatch();
    const buttons = Object.entries(reactionEmojis).map(
        ([name, emoji]) => {
            const count = name == 'like'? like : dislike;
            return(
                <button key={name} onClick={()=>reactionHandler(name, post)}>
                    {emoji} {count}
                </button>
            )
        }
    );
    return ( 
        <div className="buttons-container">{buttons}</div>
     );
}
 
export default ReactionButtons;