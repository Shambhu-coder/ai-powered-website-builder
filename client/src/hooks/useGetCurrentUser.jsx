import API from '../api/axios.js'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'

function useGetCurrentUser() {
    const dispatch=useDispatch()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) return  // No token = not logged in, skip the request

        const getCurrentUser = async () => {
            try {
              const result=await API.get(`/api/user/me`)
              dispatch(setUserData(result.data))
            } catch (error) {
              console.log(error)
              // If token is invalid/expired, clear it
              if (error?.response?.status === 401) {
                localStorage.removeItem("token")
              }
            }
        }
        getCurrentUser()
    }, [])
}

export default useGetCurrentUser