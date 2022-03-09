import axios from 'axios';

const api = 'https://fji-portfolio-server.herokuapp.com/api/'

export const getMyCV = async (data) => {
         return axios.post(api + 'download-cv', data);
}


export const newsletter = async (data) => {
    return axios.post(api + 'newsletter', data);
}