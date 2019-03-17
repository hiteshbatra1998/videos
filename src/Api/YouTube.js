import axios from 'axios';
const KEY = 'YOUR KEY';  // put your api key
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        Key:KEY,
        part:'snippet',
        maxResults:5
    }

});
