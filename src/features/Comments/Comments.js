import { useSelector } from "react-redux";
import { useState } from "react";

export default function Comments({ url, comments }) {
  const { isLoading, hasError } = useSelector((state) => state.comments);
  const [loadFirstTime, setLoadFirstTime] = useState(true);
  // console.log("This is in Comment Component");
  // console.log(isLoading);
  // console.log("The Url is " + url);
  // console.log(comments.comments[url]);

  if (comments.comments[url]) {
    if (isLoading) {
      console.log('Loading')
      return <h1>Loading</h1>
      // return (
      //   <>
      //     <div className="mb-8 flex justify-center">
      //       <div className="spinner"></div>
      //     </div>
      //   </>
      // );
    } else if (hasError) {
      return (
        <>
          <div className="mt-32 flex justify-center">
            <p className="text-center font-bold text-4xl">
              Something went wrong, Please check your connection or try again
              later.
            </p>
          </div>
        </>
      );
    } else {
      return (
        <>
          {comments.comments[url].map((comment) => {
            const idUp = comment.id + 'up'
            const idDown = comment.id + 'down'
            if (comment.author !== undefined) {
              return (
                <>
                  <hr className=""></hr>
                  <div className="px-6 mb-4">
                    <div className="flex justify-between">
                      <div className="flex mb-4 mt-4">
                        <div className="w-6 h-6 bg-blue-300 mr-2 rounded-full"></div>
                        <p><span className="text-sm font-bold text-blue-600">{comment.author}</span></p>
                      </div>
                      <div>
{/* 
                        <div className="flex gap-x-2 border px-2 rounded-md border-gray-500 mt-4">
                          <div className="flex justify-center items-center">
                            <button className="text-gray-500 hover:text-green-500">
                              <FontAwesomeIcon icon={faArrowUp} className="text-sm" />
                            </button>
                          </div>
                          <div className="text-center text-gray-500 text-sm font-bold">{comment.ups}</div>
                          <div>
                            <div className="w-px bg-gray-500 h-full"></div>
                          </div>
                          <div className="flex justify-center items-center">
                            <button className="text-gray-500 hover:text-red-500">
                              <FontAwesomeIcon icon={faArrowDown} className="text-sm" />
                            </button>
                          </div>
                        </div> */}

                      </div>
                    </div>

                    <div className="max-h-24 text-ellipsis overflow-hidden">
                      <p className="text-justify text-pretty whitespace-pre-line inline-block">
                        {comment.body}
                      </p>
                    </div>
                  </div>
                  <hr></hr>
                </>
              );
            }
          })}
        </>
      );
    }
  }
}
