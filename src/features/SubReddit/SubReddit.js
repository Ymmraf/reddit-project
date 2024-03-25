import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits } from "../../app/subredditsSlice";
import { setSelectedSubreddits } from "../../app/subredditsSlice";

export default function SubReddit({ onClick }) {
  const dispatch = useDispatch();
  const subredditData = useSelector((state) => state.subreddits.subreddits);
  const { selected, isLoading } = useSelector((state) => state.subreddits);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  const SubRedditButton = ({url, title, key}) => {
    let buttonClass
    if(title === selected) {
        buttonClass = "rounded-full p-2 bg-gray-300"
    } else {
        buttonClass = "rounded-full duration-300 p-2 hover:bg-gray-300"
    }

    return (
      <>
        <button
          className={buttonClass}
          onClick={() => {
            onClick(url);
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
  };

  if (isLoading) {
    return (
      <>
        <section className="h-40 mt-20 pt-3 m-auto shadow-md pb-4 flex justify-center items-center">
          <div className="flex justify-center ">
            <div className="w-8 h-8 bg-orange-500 animate-spin"></div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="mt-20 pt-3 m-auto shadow-md pb-4">
        <ul className="flex flex-wrap justify-center gap-x-2 gap-y-4 w-10/12 m-auto">
          {subredditData.map((item, index) => (
            <SubRedditButton url={item.url} title={item.title} key={index}/>
            // <button
            //   className={
            //     item.title === selected &&
            //     "rounded-full duration-300 p-2 hover:bg-gray-300"
            //   }
            //   //   className="rounded-full duration-300 p-2 hover:bg-gray-300"
            //   onClick={() => {
            //     onClick(item.url);
            //     dispatch(setSelectedSubreddits(item.title));
            //   }}
            //   key={index}
            // >
            //   <div className="flex">
            //     <div className="bg-orange-400 w-6 h-6 rounded-full"></div>
            //     <p className="pl-2 font-bold">{item.title}</p>
            //   </div>
            // </button>
          ))}
        </ul>
      </section>
    </>
  );
}
