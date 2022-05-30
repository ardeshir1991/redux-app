import { useDispatch } from "react-redux";
import './ReactionButtons.scss';
import { fetchReactions } from "../../redux/postsSlice";
import { useState } from "react";

const ReactionButtons = ({post}) => {
    const reactionEmojis = {
        like: '👍',
        dislike: '👎'
    }

    const [like, setLike] = useState(post.reactions.like);
    const [dislike, setDislike] = useState(post.reactions.dislike);
    
    const reactionHandler = (name, post)=> {
        let count;
        if(name === 'like'){
            count = like + 1;
            setLike(count);
        }else if(name === 'dislike'){
            count = dislike + 1;
            setDislike(count);
        }
        dispatch(fetchReactions({postId: post._id, reaction: name, count}));
    }


    const dispatch = useDispatch();
    const buttons = Object.entries(reactionEmojis).map(
        ([name, emoji]) => {
            const count = name === 'like'? like : dislike;
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