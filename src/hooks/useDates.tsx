import {useContext} from 'react'
import {DatesContext} from '../context/DatesContext'

export const useDates = () => {
    return useContext(DatesContext)
}
