import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Post(props) {
  return (
    <div
      className="grid grid-cols-1 w-full bg-white rounded-xl mb-4 p-6 gap-x-3 lg:grid-cols-post"
      key={props.key}
    >
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

          <a href="#" className="py-1 px-2 hover:bg-gray-200 rounded-md">
            <div className="flex">
              <FontAwesomeIcon
                icon={faComment}
                className="text-md text-gray-500"
              />
              <p className="text-gray-500 pl-1">{props.data.comments}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
