
import axios from "axios";
const KEY = "53364959-970251902b7523d6caf21016a";

const URL = "https://pixabay.com/api/";

export const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
    const response = await
        axios.get(URL, {
            params: {
                key: KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: PER_PAGE,
                page,
            }
        })
    return response.data;
};

// const defaultParamas = {
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
// }

// export function getImagesByQuery(query) {
//     return axios.get("https://pixabay.com/api/", {
//         params: {
//             key: KEY,
//             q: query,
//             image_type: 'photo',
//             orientation: 'horizontal',
//             safesearch: true,
//         }
//     }).then(response => response.data);
// };
// .then(response => new Promise(res => setTimeout(() => res(response.data), 800)));
