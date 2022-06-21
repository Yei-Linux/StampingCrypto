import axios from "axios";

const stampingAxios = axios.create({
    baseURL: 'https://api.stamping.io'
})

export default stampingAxios