import axios from 'axios'

const fetchProduct = (id) => axios.get(`http://localhost:3001/api/v1/items/${id}`)

export default fetchProduct
