import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function SmallVoteButton({link, onClick, vote}) {
    return (
      <>
        <div className="flex gap-x-2 border px-2 rounded-md border-gray-500 lg:hidden">
          <button id={link + "up"} className="flex hover:text-green-500 text-gray-500" onClick={() => onClick("up")}>
            <FontAwesomeIcon icon={faArrowUp} className="text-md mt-1" />
          </button>
          <p className="text-gray-500 font-bold" id={link + "vote"}>{vote}</p>
          <div> <div className="w-px bg-gray-500 h-full"></div> </div>
          <button id={link + "down"} className="flex hover:text-red-500 text-gray-500" onClick={() => onClick("down")}>
            <FontAwesomeIcon icon={faArrowDown} className="text-md mt-1" />
          </button>
        </div>
      </>
    );
  }