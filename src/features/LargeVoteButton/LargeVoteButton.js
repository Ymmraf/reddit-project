import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function LargeVoteButton({onClick, link, vote}) {
    return (
      <>
        <div className="hidden lg:block mt-8 ml-4">
          <div className="flex justify-center mt-2 text-gray-500">
            <button className="mb-2 text-gray-500 hover:text-green-500" onClick={() => onClick("up")} id={link + "lgUp"}>
              <FontAwesomeIcon icon={faArrowUp} className="text-3xl" />
            </button>
          </div>
          <div className="text-center font-bold text-gray-500" id={link + "lgVote"}>{vote}</div>
          <div className="flex justify-center mt-2 text-gray-500">
            <button className="mb-2 text-gray-500 hover:text-red-500" onClick={() => onClick("down")} id={link + "lgDown"} >
              <FontAwesomeIcon icon={faArrowDown} className="text-3xl" />
            </button>
          </div>
        </div>
      </>
    );
  }