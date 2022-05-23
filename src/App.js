
import './App.css';
import Counter from './features/counter/Counter';
import Posts from './features/post/Posts';
import PostForm from './features/post/PostForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;
