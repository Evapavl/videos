import youtube from "../apis/youtube"

const { useState, useEffect } = require("react")

const UseVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    }, [])

    const search = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        setVideos(response.data.items);

    }
    return [videos, search]
}
export default UseVideos;