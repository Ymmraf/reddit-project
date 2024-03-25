import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPost } from "../../app/redditSlice";

export default function Header() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState()

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
      <header>
        <nav className="font-mono py-4 shadow-md fixed top-0 left-0 right-0 z-50 bg-white grid grid-cols-3">
          <div>
            <h1 className="pl-8 text-4xl font-bold text-left underline underline-offset-8">
              <span className="text-orange-500 underline underline-offset-8">
                Reddit
              </span>
              Minimal
            </h1>
          </div>
          <div className="flex">
            <input className="pl-6 w-full h-10 bg-gray-200 rounded-3xl" name="search" type="text" placeholder="Search" onChange={handleSearchChange} value={search}/>
            <button type="submit" onClick={handleSubmit} className="rounded-full duration-300 font-bold text-white ml-8 px-6 bg-orange-500 hover:bg-orange-600">Search</button>
          </div>
          <div></div>
        </nav>
      </header>
    </>
  );
}