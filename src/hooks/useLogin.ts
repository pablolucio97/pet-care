import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'

export const useLogin = () => {
    return useContext(AuthContext)
}