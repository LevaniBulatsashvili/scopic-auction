import axios from 'axios'

const deleteProduct = (id) => axios.delete(`http://localhost:3001/api/v1/items/${id}`)

export default deleteProduct
