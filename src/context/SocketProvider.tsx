'use client'

import { createContext, useCallback, useEffect, useMemo } from "react"
import {io} from 'socket.io-client'

interface SocketProivderProps{
    children?:React.ReactNode
}
interface ISocketContext{
    sendMessage:(msg:string)=>void,
    sendLocation:(location:string)=>void
}
const SocketContext=createContext<ISocketContext|null>(null)


export const SocketProvider:React.FC<SocketProivderProps>=({children})=>{

    const sendMessage:ISocketContext['sendMessage']=useCallback((msg)=>{
        console.log(msg)
    },[])

    useEffect(()=>{
        const socket=io('http://localhost:8000')
        return ()=>{
            socket.disconnect()
        }
    },[])

    return (
        <SocketContext.Provider value={null}>
            {children}
        </SocketContext.Provider>
    )
}