import Post from "../Post/Post"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPost } from "../../app/redditSlice"
import { mockComponent } from "react-dom/test-utils"

export default function Body() {
    const dispatch = useDispatch()
    const postData = useSelector((state) => state.reddit)
    const { isLoading } = useSelector(state => state.reddit)
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
                    <div className="w-8 h-8 bg-orange-500 animate-spin"></div>
                </div>
            </>
        )
    }

    return (
        <>
            <section className="w-8/12 bg-gray-200 m-auto mt-4 p-4 h-full">
                {
                    postData.post.map((item,index) => <Post data={item} key={index}/>)
                }
            </section>
        </>
    )
}