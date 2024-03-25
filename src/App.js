import Header from './components/header/Header';
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

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = () => {
    if(!search) {
      return
    } else {
      const queryString = `search.json?q=${search}`
      setSearch('')
      dispatch(fetchPost(queryString))
    }
  }

  return (
    <>
      <Header onSubmit={handleSubmit} onChange={handleSearchChange} value={search}/>
      <SubReddit onClick={handleClickSubreddits}/>
      <Body />
    </>
  );
}

export default App;