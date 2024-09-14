import axios, {AxiosRequestConfig} from 'axios'

const baseUrl = 'https://api.rawg.io/api'

const axiosInstance =  axios.create({
    baseURL: baseUrl,
    params:{
        key:"b7f5d9d4db3240e4ac21e7da3601e2c2"
    }
})

class ApiClient<T> {
    endPoint:string;

    constructor(endpoint:string){
        this.endPoint = endpoint;
    }

    getAll =  async (config?:AxiosRequestConfig): Promise<T[]> => {
        const res = await axiosInstance.get<T[]>(this.endPoint,config);
        return res.data;
    }

     getById = async (id: number): Promise<T> => {
         const res = await axiosInstance.get<T>(`${this.endPoint}/${id}`);
         return res.data;
    }

     add = async (data: T): Promise<T> =>  {
        const res = await axiosInstance.post(this.endPoint,data);
        return res.data;
    }

     update = async (data: T): Promise<T> =>  {
        const res = await axiosInstance.put(this.endPoint, data);
        return res.data;
    }

     delete = async (id: string): Promise<T> =>  {
        const res = await axiosInstance.delete(`${this.endPoint}/${id}`);
        return res.data;
    }

}

export default ApiClient;