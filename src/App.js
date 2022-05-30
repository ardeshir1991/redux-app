
import './App.css';
import Counter from './features/counter/Counter';
import Posts from './features/post/Posts';
import PostForm from './features/post/PostForm';
import {Routes, Route, Navigate} from 'react-router-dom';
import SinglePost from './features/post/SinglePost';
import EditPost from './features/post/EditPost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/postform' element={<PostForm />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/posts/singlepost' element={<SinglePost />}>
          <Route path=':postId' element={<SinglePost />}/>
        </Route>
        <Route path='/posts/edit' element={<EditPost />}>
          <Route path=':postId' element={<EditPost />}/>
        </Route>
        <Route path='/' element={<Posts />}/>
      </Routes>
    </div>
  );
}

export default App;
