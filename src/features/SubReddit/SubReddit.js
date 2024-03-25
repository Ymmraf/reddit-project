import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSubreddits } from "../../app/subredditsSlice"

export default function SubReddit() {
    const dispatch = useDispatch()
    const subredditData = useSelector(state => state.subreddits.subreddits)
    useEffect(() => {
        dispatch(fetchSubreddits())
    }, [])

    return (
        <>
            <section className="mt-20 pt-3 w-10/12 m-auto">
                <ul className="flex flex-wrap justify-evenly gap-x-5 gap-y-4">
                    {
                        subredditData.map(item => <li className="basis-40">{item.title}</li>)
                    }
                </ul>
            </section>
        </>
    )
}