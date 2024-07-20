import {SocketContext} from '@/context/SocketProvider'
import { useContext } from 'react'

export const useSocket=()=>{
    const socket =useContext(SocketContext)
    return socket
}

