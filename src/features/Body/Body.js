import Post from "../../components/Post/Post"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPost } from "../../app/redditSlice"
import { mockComponent } from "react-dom/test-utils"

export default function Body() {
    const dispatch = useDispatch()
    const postData = useSelector((state) => state.reddit)
    const [post, setPost] = useState()

    useEffect(() => {
        dispatch(fetchPost())
        updatePostData(postData)
    },[])
    
    const updatePostData = (data) => {
        setPost(data)
    }

    return (
        <>
            <section className="w-5/12 bg-gray-200 m-auto mt-4 p-4 h-full">
                {
                    postData.post.map(item => <Post data={item}/>)
                }
            </section>
        </>
    )
}