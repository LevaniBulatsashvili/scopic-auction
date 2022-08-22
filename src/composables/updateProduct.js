import axios from 'axios'

const updateProduct = (id, product) => axios.patch(`http://localhost:3001/api/v1/items/${id}`, product)

export default updateProduct
