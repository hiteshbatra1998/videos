import axios from 'axios';
const KEY = 'AIzaSyA2Iz_RWEq4mA_4GtRFN-1K7IN_OdoMFwY';
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        Key:KEY,
        part:'snippet',
        maxResults:5
    }

});