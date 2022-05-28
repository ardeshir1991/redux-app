import { useSelector, useDispatch } from "react-redux";
import './Author.scss';
import { allUsers, fetchUsers } from "../../redux/usersSlice";
import { useEffect } from "react";


const Author = ({userId}) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers())
    }, [dispatch]);
    const users = useSelector(allUsers);
    const author = users.find(user => user._id === userId);
    return ( 
        <p className="post-author">Written By {author ? author.fname + ' ' + author.lname : 'Unkown Author'}</p>
     );
}
 
export default Author;
