import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:"b7f5d9d4db3240e4ac21e7da3601e2c2"
    }
})