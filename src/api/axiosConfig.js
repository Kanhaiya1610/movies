import axios from 'axios';

export default axios.create({
    baseURL: 'https://078f-2409-40d1-1009-aced-8155-64d6-c6d2-da04.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});