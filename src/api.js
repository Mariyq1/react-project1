
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: '`https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd4cd9e5d-611b-473f-be26-597eb99dbea2'
    }
})
    export const usersApi = {
    getUsers (currentPage =1,pageSize=10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
    ).then(response=>{
        return response.data;});}

}
   export const unFollowApi = {
   UnfollowClick(u){
    return instance.delete(`unfollow/${u.id}`
   ).then(response=>{
        return response.data});}
   }
   export const followApi = {
    followClick(u){
    return instance.post(`follow/${u.id}`
    ).then(response=>{
        return response.data})
}
   }


