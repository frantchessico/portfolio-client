import axios from 'axios';


export const getBlogs = async () => {
    return await axios.get('https://dev.to/api/articles?username=frantchessico');
}