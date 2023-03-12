import axios from 'axios';
import { BASE_URL } from './constants';

export const HTTP = (token?: string) => {
    return axios.create({
        baseURL: BASE_URL,
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
}

// export const HTTP = (options = {}) => {
//     const {
//         headers = {}
//     } = options;
//     return axios.create({
//         baseURL: BASE_URL,
//         withCredentials: false,
//         headers: {
//             Accept: 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json',
//             ...headers
//         },
//         timeout: 65000
//     });
// };

// export const HTTP_MULTIPART = (options = {}) => {
//     const {
//         headers = {}
//     } = options;
//     return axios.create({
//         baseURL: BASE_URL,
//         withCredentials: false,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'multipart/form-data',
//             ...headers
//         },
//         timeout: 65000
//     });
// 