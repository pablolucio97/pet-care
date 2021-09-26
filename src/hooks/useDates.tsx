import { useContext } from 'react';
import { DatesContext } from '../context/DatesContext'

export function useDates() {
    return useContext(DatesContext)
}