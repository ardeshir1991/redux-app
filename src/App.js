
import './App.css';
import Counter from './features/counter/Counter';
import Posts from './features/post/Posts';
import PostForm from './features/post/PostForm';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/postform' element={<PostForm />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/' element={<Posts />}/>
      </Routes>
    </div>
  );
}

export default App;
