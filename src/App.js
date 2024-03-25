import Header from './features/header/Header';
import Body from './features/Body/Body';
import SubReddit from './features/SubReddit/SubReddit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './app/redditSlice';
import { useState } from 'react';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState()

  const handleClickSubreddits = (uri) => {
    dispatch(fetchPost(uri))
  }


  return (
    <>
      <Header/>
      <SubReddit onClick={handleClickSubreddits}/>
      <Body />
    </>
  );
}

export default App;