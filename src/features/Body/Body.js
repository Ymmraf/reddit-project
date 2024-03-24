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

    console.log(postData.post)

    const mock = {
        title : 'Title',
        imageUrl : "https://b.thumbs.redditmedia.com/-H6MvWZXSG0lkI300pP1-VEPh_kjW_eMcUrosdiACxo.jpg",
        selftext : 'SelfText',
        author : 'Farm',
        comments : '69',
        votes : '322'
    }

    return (
        <>
            <section className="w-5/12 bg-gray-200 m-auto mt-20 p-4 h-screen">
                {
                    postData.post.map(item => <Post data={item}/>)
                }
                {/* <Post data={mock} /> */}
            </section>
        </>
    )
}