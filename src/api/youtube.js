import axios from 'axios';

const KEY = "AIzaSyCS0OW4oOksAInGynU_mtwNuTD7QQ0sbRU";

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
