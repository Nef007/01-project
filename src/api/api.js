import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "315484d9-d1e1-43bd-9fc8-372f870c219f"}
});

export const userAPI = {
    getUsers(currentPage, pageSize=10 ){

        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(respons => {
            return respons.data
        })
    }



}