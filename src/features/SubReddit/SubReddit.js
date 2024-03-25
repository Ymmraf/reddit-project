import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits } from "../../app/subredditsSlice";

export default function SubReddit({ onClick }) {
  const dispatch = useDispatch();
  const subredditData = useSelector((state) => state.subreddits.subreddits);
  const { isLoading } = useSelector((state) => state.subreddits);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, []);

  if (isLoading) {
    return (
      <>
        <section className="mt-20 pt-3 m-auto shadow-md pb-4">
          <p className="text-center mt-20">Loading . . .</p>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="mt-20 pt-3 m-auto shadow-md pb-4">
        <ul className="flex flex-wrap justify-center gap-x-2 gap-y-4 w-10/12 m-auto">
          {subredditData.map((item, index) => (
            <button
              className="rounded-full duration-300 p-2 hover:bg-gray-300"
              onClick={() => onClick(item.url)}
              key={index}
            >
              <div className="flex">
                <div className="bg-orange-400 w-6 h-6 rounded-full"></div>
                <p className="pl-2">{item.title}</p>
              </div>
            </button>
          ))}
        </ul>
      </section>
    </>
  );
}
