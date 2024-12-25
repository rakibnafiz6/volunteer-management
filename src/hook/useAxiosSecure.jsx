import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    withCredentials: true
  });

const useAxiosSecure = () => {
    const {signOutUser} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        instance.interceptors.response.use((response)=>{
            return response;
        },(error)=>{

            if(error.status === 401 || error.status === 403){
                signOutUser()
                 .then(() => {
                //  console.log('user logout successfully');
                 navigate('/login');
            })
                .catch(error => {
                    Swal.fire({
                        title: 'Error!',
                        text: error.message,
                        icon: 'error',
                        confirmButtonText: 'OK'
                      })
                })
            }


            return Promise.reject(error);
        })
    },[])

    return instance;
};

export default useAxiosSecure;
