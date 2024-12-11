import axios from 'axios';
const BASE_URL = "https://fakestoreapi.com/products"

export const getServerData = async () => {
    return await axios.get(`${BASE_URL}`).then(res => {
        // console.log(res.data)
        // console.dir(items)
        return (res.data)
    })
}

export const fetchData = axios.get(`${BASE_URL}`).then(res => {
    return res.data
})