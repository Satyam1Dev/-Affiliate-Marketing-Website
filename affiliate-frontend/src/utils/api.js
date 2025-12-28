import axios from 'axios'


const API = axios.create({ baseURL: '/api' })


export const fetchProducts = async () => {
// replace with real API call later
return API.get('/products')
}


export const fetchPosts = async () => {
return API.get('/posts')
}


export default API