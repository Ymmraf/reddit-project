import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

export default function ToggleCommentButton({onClick, numComment, link}) {
    return (
      <>
        <button className="py-1 px-2 hover:bg-gray-200 rounded-md" onClick={() => onClick(link)} >
          <div className="flex">
            <FontAwesomeIcon icon={faComment} className="text-md text-gray-500" />
            <p className="text-gray-500 pl-1">{numComment}</p>
          </div>
        </button>
      </>
    );
  }