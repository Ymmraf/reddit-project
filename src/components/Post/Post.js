import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Post() {
  const author = "il_balilla";
  return (
    <div className="w-full bg-white p-6 grid grid-cols-post gap-x-3 rounded-xl">
      <div>
        <div className="flex justify-center mb-2 text-gray-500">
          <FontAwesomeIcon icon={faArrowUp} className="text-3xl"/>
        </div>
        <div className="text-center font-bold text-gray-500">322</div>
        <div className="flex justify-center mt-2 text-gray-500">
          <FontAwesomeIcon icon={faArrowDown} className="text-3xl"/>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">
          What screams “I have depression”?
        </h2>
        <div className="w-full">
          <img
            className="w-full"
            src="https://external-preview.redd.it/1hdfHvb8VkakPN8U5CQPVvd4lHZ2RRtTHW6_UFd4uH8.jpg?auto=webp&amp;s=87cd0f059dfe91b18a73f091c6f681d83a34e01d"
          />
        </div>
        <hr className="mt-4" />
        <div className="mt-2 flex justify-between">
          <p>
            Post by <span className="font-bold text-orange-600">{author}</span>
          </p>
          <a href="#" className="py-1 px-2 hover:bg-gray-200 rounded-md">
            <div className="flex">
              <FontAwesomeIcon icon={faComment} className="text-md text-gray-500"/>
              <p className="text-gray-500 pl-1">60</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
