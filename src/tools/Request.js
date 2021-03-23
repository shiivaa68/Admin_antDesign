import axios from  'axios'
import {BASE_URL} from './Constants'

console.log(axios,'axiosss')

axios.defaults.data={}
axios.defaults.baseURL=BASE_URL
axios.defaults.headers.common.Accept ='application/json'
axios.defaults.headers.common['content-Type'] = 'application/json'


const requestInstance = axios.create()

requestInstance.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})

requestInstance.interceptors.response.use((response)=>{
    return response
},(error)=>{
    return Promise.reject(error)
})

export const request = requestInstance
export default requestInstance

