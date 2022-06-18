
import {axios} from './axios'
import { UploadFileParams } from '../model/query_schema';

const getMyVideoByUserId = (id: number) => {
    return axios.get(`files/user/${id}`)
} 


const getMyVideoById = (id: number) => {
    return axios.get(`files/${id}`)
}

const uploadFileWithUrl = async (data: UploadFileParams) => {
    //console.log(config.BASE_URL)
    const res = await axios.post(`/files`,  {
      ...data
    });
    return res
} 

const uploadFileWithFilePath = async (formData:FormData) => {
    //console.log(config.BASE_URL)
    const res = await axios.post( '/files/uploadFile',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              });
   
  
    return res
} 
export { getMyVideoByUserId,getMyVideoById , uploadFileWithUrl, uploadFileWithFilePath }
  