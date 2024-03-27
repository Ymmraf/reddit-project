import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../app/commentSlice";
import Comments from "../Comments/Comments";
import { useState } from "react";

export default function Post(props) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.reddit)
  const comments = useSelector((state) => state.comments);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [vote, setVote] = useState(props.data.votes);
  const [voteStatus, setVoteStatus] = useState(null);

  console.log(post)

  const handleClickComment = (url) => {
    if (dataIsLoaded) {
      toggleDisplayComment(url);
    } else {
      dispatch(fetchComments(url));
      setDataIsLoaded(true);
    }
  };

  const clearVoteColor = () => {
    document.getElementById(props.data.link + "up").className = "flex hover:text-green-500 text-gray-500";
    document.getElementById(props.data.link + "down").className = "flex hover:text-red-500 text-gray-500";
    document.getElementById(props.data.link + "vote").className = "text-gray-500 font-bold";
    document.getElementById(props.data.link + "lgUp").className = "mb-2 text-gray-500 hover:text-green-500"
    document.getElementById(props.data.link + "lgDown").className = "mb-2 text-gray-500 hover:text-red-500"
    document.getElementById(props.data.link + "lgVote").className = "text-center font-bold text-gray-500"
  };

  const changeVoteColor = (button) => {
    const upButton = document.getElementById(props.data.link + "up");
    const downButton = document.getElementById(props.data.link + "down");
    const lgUpButton = document.getElementById(props.data.link + "lgUp");
    const lgDownButton = document.getElementById(props.data.link + "lgDown");
    const number = document.getElementById(props.data.link + "vote");
    const lgNumber = document.getElementById(props.data.link + "lgVote")
    if (button == "up") {
      if (upButton.className == "flex hover:text-green-500 text-gray-500") {
        upButton.className = "flex text-green-500";
        lgUpButton.classList = "mb-2 text-green-500"
        number.className = "font-bold text-green-500";
        lgNumber.className = "text-center font-bold text-green-500"
      } else {
        clearVoteColor();
      }
    } else if (button == "down") {
      if (downButton.className == "flex hover:text-red-500 text-gray-500") {
        downButton.className = "flex text-red-500";
        lgDownButton.className = "mb-2 text-red-500"
        number.className = "font-bold text-red-500";
        lgNumber.className = "text-center font-bold text-red-500"
      } else {
        clearVoteColor();
      }
    }
  };

  const handleClickVote = (vote) => {
    if (!voteStatus) {
      if (vote === "up") {
        setVote((vote) => vote + 1);
        setVoteStatus("up");
        changeVoteColor("up");
      } else if (vote === "down") {
        setVote((vote) => vote - 1);
        setVoteStatus("down");
        changeVoteColor("down");
      }
    } else if (voteStatus) {
      if (vote === voteStatus) {
        if (vote == "up") {
          setVote((vote) => vote - 1);
          setVoteStatus(null);
          clearVoteColor();
        } else if ((vote = "down")) {
          setVote((vote) => vote + 1);
          setVoteStatus(null);
          clearVoteColor();
        }
      } else if (vote !== voteStatus) {
        if (vote == "up") {
          setVote((vote) => vote + 2);
          setVoteStatus("up");
          clearVoteColor();
          changeVoteColor("up");
        } else if (vote == "down") {
          setVote((vote) => vote - 2);
          setVoteStatus("down");
          clearVoteColor();
          changeVoteColor("down");
        }
      }
    }
  };

  const toggleDisplayComment = (url) => {
    const commentBlock = document.getElementById(url);
    if (commentBlock.className == "block") {
      commentBlock.className = "hidden";
    } else {
      commentBlock.className = "block";
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl">
        <div
          className="grid grid-cols-1 w-full bg-white rounded-xl mb-4 gap-x-3 lg:grid-cols-post"
          key={props.key}
        >
          <div className="hidden lg:block mt-8 ml-4">
            <div className="flex justify-center mt-2 text-gray-500">
              <button className="mb-2 text-gray-500 hover:text-green-500" onClick={() => handleClickVote('up')} id={props.data.link + "lgUp"}>
                <FontAwesomeIcon icon={faArrowUp} className="text-3xl" />
              </button>
            </div>
            <div className="text-center font-bold text-gray-500" id={props.data.link + "lgVote"}>
              {vote}
            </div>
            <div className="flex justify-center mt-2 text-gray-500">
              <button className="mb-2 text-gray-500 hover:text-red-500" onClick={() => handleClickVote('down')} id={props.data.link + "lgDown"}>
                <FontAwesomeIcon icon={faArrowDown} className="text-3xl" />
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* This is Title Img Body div */}
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
                {
                  props.data.imageUrl !== 'self' &&
                  props.data.imageUrl !== 'nsfw' &&
                  props.data.imageUrl !== 'default' &&
                  !props.data.imageUrl.includes('external')
                  ? <img className="w-full" src={props.data.imageUrl} /> : <></>
                }
              </div>
              <hr className="mt-4" />

              <div className="mt-2 flex justify-between">
                <div className="flex gap-x-2 border px-2 rounded-md border-gray-500 lg:hidden">
                  <button
                    id={props.data.link + "up"}
                    className="flex hover:text-green-500 text-gray-500"
                    onClick={() => handleClickVote("up")}
                  >
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="text-md mt-1"
                    />
                  </button>
                  <p
                    className="text-gray-500 font-bold"
                    id={props.data.link + "vote"}
                  >
                    {vote}
                  </p>
                  <div>
                    <div className="w-px bg-gray-500 h-full"></div>
                  </div>
                  <button
                    id={props.data.link + "down"}
                    className="flex hover:text-red-500 text-gray-500"
                    onClick={() => handleClickVote("down")}
                  >
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="text-md mt-1"
                    />
                  </button>
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
        </div>
        <div className="mb-4">
          <div className="block" id={props.data.link}>
            <Comments url={props.data.link} comments={comments} />
          </div>
        </div>
      </div>
    </>
  );
}
