import Header from './components/header/Header';
import Body from './features/Body/Body';
import SubReddit from './features/SubReddit/SubReddit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './app/redditSlice';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const handleClickSubreddits = (uri) => {
    console.log(uri)
    dispatch(fetchPost(uri))
  }

  return (
    <>
      <Header />
      <SubReddit onClick={handleClickSubreddits}/>
      <Body />
    </>
  );
}

export default App;