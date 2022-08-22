import axios from 'axios'

const createProduct = (product) => axios.post(`http://localhost:3001/api/v1/items`, product)

export default createProduct
