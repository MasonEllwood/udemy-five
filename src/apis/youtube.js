import axios from 'axios';

const KEY = 'AIzaSyAcmuhrYNzz_r7Pe4joQviAzv1scMDj2bc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});