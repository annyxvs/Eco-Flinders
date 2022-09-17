import axios from 'axios'

const API = axios.create({
    baseURL: 'https://zoo-animal-api.herokuapp.com/'
})

export const api  = {
    getOne: async () =>{
        let response = await API.get('/animals/rand');
        return response.data;
    },
    getAll: async () =>{
        let response = await API.get('/animals/rand/9')
        return response.data;
    }
}