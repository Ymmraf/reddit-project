import Post from "../Post/Post"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPost } from "../../app/redditSlice"
import { mockComponent } from "react-dom/test-utils"
import { toHaveAccessibleErrorMessage } from "@testing-library/jest-dom/matchers"

export default function Body() {
    const dispatch = useDispatch()
    const postData = useSelector((state) => state.reddit)
    const { isLoading, hasError } = useSelector(state => state.reddit)
    const [post, setPost] = useState()

    useEffect(() => {
        dispatch(fetchPost('r/popular.json'))
        updatePostData(postData)
    },[dispatch])
    
    const updatePostData = (data) => {
        setPost(data)
    }

    console.log(postData)

    if(isLoading) {
        return (
            <>
                <div className="mt-32 flex justify-center">
                    {/* <div className="w-8 h-8 bg-orange-500 animate-spin"></div> */}
                    <div className="spinner"></div>
                </div>
            </>
        )
    } else if (hasError) {
        return (
            <>
                <div className="mt-32 flex justify-center">
                    <p className="text-center font-bold text-4xl">Something went wrong, Please check your connection or try again later.</p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <section className="
                w-full bg-gray-200 m-auto mt-4 p-4 h-full
                lg:w-8/12
                ">
                    {
                        postData.post.map((item,index) => <Post data={item} key={index}/>)
                    }
                </section>
            </>
        )
    }
}