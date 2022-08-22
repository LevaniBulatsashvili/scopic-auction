import axios from 'axios'

const fetchProducts = (queries='') => axios.get(`http://localhost:3001/api/v1/items?${queries}`)

export default fetchProducts