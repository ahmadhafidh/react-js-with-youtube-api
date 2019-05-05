import axios from 'axios';

const KEY = 'AIzaSyCzZKp5fHiYMo8lWLqK3XfDxgIGNej1PZc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});