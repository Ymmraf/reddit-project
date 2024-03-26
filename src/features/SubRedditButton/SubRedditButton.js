import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedSubreddits } from "../../app/subredditsSlice";
import { fetchPost } from "../../app/redditSlice";

function SubRedditButton({ url, title, key }) {
  const { selected } = useSelector((state) => state.subreddits);
  const dispatch = useDispatch();
  let buttonClass;

  const handleClickSubreddits = (uri) => {
    dispatch(fetchPost(uri));
  };

  if (title === selected) {
    buttonClass = "rounded-full p-2 bg-gray-300";
  } else {
    buttonClass = "rounded-full duration-300 p-2 hover:bg-gray-300";
  }

  return (
    <>
      <button
        className={buttonClass}
        onClick={() => {
          handleClickSubreddits(url);
          dispatch(setSelectedSubreddits(title));
        }}
        key={key}
      >
        <div className="flex">
          <div className="bg-orange-400 w-6 h-6 rounded-full"></div>
          <p className="pl-2 font-bold">{title}</p>
        </div>
      </button>
    </>
  );
}

export { SubRedditButton } 