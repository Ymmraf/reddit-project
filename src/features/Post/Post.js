import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../app/commentSlice";
import { useState } from "react";
import { addComment } from "../../app/commentSlice";
import toggleDisplayComment from "../../utilities/toggleDisplayComment";
import Comments from "../Comments/Comments";
import LargeVoteButton from "../LargeVoteButton/LargeVoteButton";
import SmallVoteButton from "../SmallVoteButton/SmallVoteButton";
import ToggleCommentButton from "../ToggleCommentButton/ToggleCommentButton";
import LargeAuthor from "../LargeAuthor/LargeAuthor";
import PostImage from "../PostImage/PostImage";
import SmallAuthor from "../SmallAuthor/SmallAuthor";
import PostBody from "../PostBody/PostBody";

export default function Post(props) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.reddit)
  const comments = useSelector((state) => state.comments);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [vote, setVote] = useState(props.data.votes);
  const [voteStatus, setVoteStatus] = useState(null);

  // console.log(post)

  const handleClickComment = (url) => {
    if (dataIsLoaded) {
      toggleDisplayComment(url);
    } else {
      dispatch(addComment(url))
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

  return (
    <>
      <div className="bg-white rounded-xl">
        <div className="grid grid-cols-1 w-full bg-white rounded-xl mb-4 gap-x-3 lg:grid-cols-post" key={props.key}>
          <LargeVoteButton onClick={handleClickVote} link={props.data.link} vote={vote}/>
          <div className="p-6">
            <div>
              <SmallAuthor author={props.data.author} />
              <PostBody title={props.data.title} body={props.data.selftext}/>
              <PostImage imageUrl={props.data.imageUrl} />

              <hr className="mt-4" />

              <div className="mt-2 flex justify-between">
                <SmallVoteButton link={props.data.link} onClick={handleClickVote} vote={vote}/>
                <LargeAuthor author={props.data.author}/>
                <ToggleCommentButton onClick={handleClickComment} numComment={props.data.comments} link={props.data.link}/>
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
