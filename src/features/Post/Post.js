import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Post(props) {
  return (
    <div className="w-full bg-white p-6 grid grid-cols-post gap-x-3 rounded-xl mb-4" key={props.key}>
      <div>
        <div className="flex justify-center mb-2 text-gray-500">
          <FontAwesomeIcon icon={faArrowUp} className="text-3xl"/>
        </div>
        <div className="text-center font-bold text-gray-500">{props.data.votes}</div>
        <div className="flex justify-center mt-2 text-gray-500">
          <FontAwesomeIcon icon={faArrowDown} className="text-3xl"/>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-justify">
          {props.data.title}
        </h2>
        <div className="max-h-24 text-ellipsis overflow-hidden">
          <p className="text-justify">{props.data.selftext && props.data.selftext}</p>
        </div>
        <div className="w-full">
          <img
            className="w-full"
            src={props.data.imageUrl}
          />
        </div>
        <hr className="mt-4" />
        <div className="mt-2 flex justify-between">
          <p>
            Post by <span className="font-bold text-orange-600">{props.data.author}</span>
          </p>
          <a href="#" className="py-1 px-2 hover:bg-gray-200 rounded-md">
            <div className="flex">
              <FontAwesomeIcon icon={faComment} className="text-md text-gray-500"/>
              <p className="text-gray-500 pl-1">{props.data.comments}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
