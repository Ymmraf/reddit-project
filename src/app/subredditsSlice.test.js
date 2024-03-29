import { fetchSubreddits } from "./subredditsSlice";

test('Fetch subreddits from reddit',  () => {
    expect(fetchSubreddits('https://www.reddit.com/subreddits.json')).resolves.toBeDefined()
})

// test('Fetch subreddits to be Error', async () => {
//     expect(fetchSubreddits('https://www.reddit.com/subreddits.json')).rejects.toMatch('error')
// })