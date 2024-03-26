import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits } from "../../app/subredditsSlice";
import { SubRedditButton } from "../../features/SubRedditButton/SubRedditButton";

export default function SubReddit() {
  const dispatch = useDispatch();
  const subredditData = useSelector((state) => state.subreddits.subreddits);
  const { isLoading, hasError } = useSelector((state) => state.subreddits);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <section className="h-40 mt-20 pt-3 m-auto shadow-md pb-4 flex justify-center items-center">
          <div className="flex justify-center ">
            <div className="spinner"></div>
          </div>
        </section>
      </>
    );
  } else if (hasError) {
    return;
  } else {
    return (
      <>
        <section className="sm:mt-20 mt-28 pt-3 m-auto shadow-md pb-4">
          <ul className="flex flex-wrap justify-center gap-x-2 gap-y-4 w-10/12 m-auto">
            {subredditData.map((item, index) => (
              <SubRedditButton url={item.url} title={item.title} key={index} />
            ))}
          </ul>
        </section>
      </>
    );
  }
}
