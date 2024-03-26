import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../app/commentSlice";

export default function Post(props) {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments)

  const handleClickComment = (url) => {
    dispatch(fetchComments(url));
  };

  console.log(comments)

  function Comments() {
    return (
      <>
        <hr className=""></hr>
        <div className="px-6 mb-4">
          <div className="flex justify-between">
            <div className="flex mb-4 mt-4">
              <div className="w-6 h-6 bg-blue-300 mr-2 rounded-full"></div>
              <p>
                <span className="text-sm font-bold text-blue-600">
                  +++AUTHOR+++
                </span>
              </p>
            </div>
            <div>
              <div className="flex gap-x-2 border px-2 rounded-md border-gray-500 lg:hidden mt-4">
                <div className="flex justify-center items-center text-gray-500">
                  <FontAwesomeIcon icon={faArrowUp} className="text-sm" />
                </div>
                <div className="text-center text-gray-500 text-sm">
                  +++VOTES+++
                </div>
                <div>
                  <div className="w-px bg-gray-500 h-full"></div>
                </div>
                <div className="flex justify-center items-center text-gray-500">
                  <FontAwesomeIcon icon={faArrowDown} className="text-sm" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p>+++BODY+++</p>
          </div>
        </div>
        <hr></hr>
      </>
    );
  }

  return (
    <>
      <div
        className="grid grid-cols-1 w-full bg-white rounded-xl mb-4  gap-x-3 lg:grid-cols-post"
        key={props.key}
      >
        <div className="p-6">
          <div className="hidden lg:block">
            <div className="flex justify-center mb-2 text-gray-500">
              <FontAwesomeIcon icon={faArrowUp} className="text-3xl" />
            </div>
            <div className="text-center font-bold text-gray-500">
              {props.data.votes}
            </div>
            <div className="flex justify-center mt-2 text-gray-500">
              <FontAwesomeIcon icon={faArrowDown} className="text-3xl" />
            </div>
          </div>

          <div>
            <div className="flex mb-4 lg:hidden">
              <div className="w-6 h-6 bg-orange-300 mr-2 rounded-full"></div>
              <p>
                <span className="text-sm font-bold text-orange-600">
                  {props.data.author}
                </span>
              </p>
            </div>
            <h2 className="font-bold mb-4 text-left text-md sm:text-xl md:text-2xl">
              {props.data.title}
            </h2>
            <div className="max-h-24 text-ellipsis overflow-hidden">
              <p className="text-justify text-pretty whitespace-pre-line inline-block">
                {props.data.selftext && props.data.selftext}
              </p>
            </div>
            <div className="w-full">
              <img className="w-full" src={props.data.imageUrl} />
            </div>
            <hr className="mt-4" />

            <div className="mt-2 flex justify-between">
              <div className="flex gap-x-2 border px-2 rounded-md border-gray-500 lg:hidden">
                <div className="flex justify-center items-center mb-1 text-gray-500">
                  <FontAwesomeIcon icon={faArrowUp} className="text-md" />
                </div>
                <div className="text-center font-bold text-gray-500">
                  {props.data.votes}
                </div>
                <div>
                  <div className="w-px bg-gray-500 h-full"></div>
                </div>
                <div className="flex justify-center items-center mb-1 text-gray-500">
                  <FontAwesomeIcon icon={faArrowDown} className="text-md" />
                </div>
              </div>

              <div className="hidden lg:flex">
                <div className="w-6 h-6 bg-orange-300 mr-2 rounded-full"></div>
                <p className="">
                  <span className="font-bold text-orange-600">
                    {props.data.author}
                  </span>
                </p>
              </div>

              <button
                className="py-1 px-2 hover:bg-gray-200 rounded-md"
                onClick={() => handleClickComment(props.data.link)}
              >
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="text-md text-gray-500"
                  />
                  <p className="text-gray-500 pl-1">{props.data.comments}</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <Comments />
      </div>
    </>
  );
}
