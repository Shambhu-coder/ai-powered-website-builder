import axios from 'axios'
import API from '../api/axios.js'
import React from 'react'
import { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'

function useGetCurrentUser() {
    const dispatch=useDispatch()
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
              const result=await API.get(`/api/user/me`)
              dispatch(setUserData(result.data))
            } catch (error) {
console.log(error)
            }
        }
        getCurrentUser()
    }, [])
}

export default useGetCurrentUser
