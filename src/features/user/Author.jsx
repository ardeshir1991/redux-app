import { useSelector } from "react-redux";
import './Author.scss';
import { allUsers } from "../../redux/usersSlice";


const Author = ({userId}) => {
    const users = useSelector(allUsers);
    const author = users.find(user => user.id === userId);
    return ( 
        <p className="post-author">Written By {author ? author.fname + ' ' + author.lname : 'Unkown Author'}</p>
     );
}
 
export default Author;
