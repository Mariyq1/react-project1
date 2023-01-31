
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "982f8b85-1a9b-4986-9c4f-de755e49955f"
    }
});
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
    },
    follow (userId){
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data
        });

    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        });

    },
    getProfile(userId){
        return instance.get(`profile/`+ userId);
            
    }


}
export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}