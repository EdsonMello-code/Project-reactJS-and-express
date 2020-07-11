import { create } from 'axios' // Axios a library to allow acess external api

// Use method create of axios to establish a link backend 
const api = create({ baseURL: "http://rocketseat-node.herokuapp.com/api/"})

export default api