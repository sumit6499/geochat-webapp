'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import {io,Socket} from 'socket.io-client'

interface SocketProivderProps{
    children?:React.ReactNode
}
interface ISocketContext{
    socket:Socket|null,
    messages:string[],
    nearbyUsers:string[],
    sendMessage:(msg:string)=>void,
    sendLocation:(lat:number,long:number)=>void,
}



export const SocketContext=createContext<ISocketContext|null>(null)



export const SocketProvider:React.FC<SocketProivderProps>=({children})=>{
    
    const [socket,setSocket]=useState<Socket|null>(null)
    const [messages,setMessages]=useState<string[]>([])
    const [nearbyUsers,setNearbyUsers]=useState<string[]>([])

    useEffect(()=>{
        const socket=io('http://localhost:8000')
        setSocket(socket)
        
        socket.on('receive-message', (msg: string) => {
            setMessages((prev) => [...prev, msg])
        })

        socket.on('nearby-friend',(users:string[])=>{
            setNearbyUsers(users)
        })

        return ()=>{
            socket.disconnect()
            socket.off('send-message')
            socket.off('receive-message')
            setSocket(null)
        }
    },[setSocket,setMessages])

    const sendMessage:ISocketContext['sendMessage']=useCallback((msg)=>{
        socket?.emit('send-message',msg,(msg:string)=>{
        })
    },[socket])

    const sendLocation:ISocketContext['sendLocation']=useCallback((lat:number,long:number)=>{
        const location=JSON.stringify({user:socket?.id,lat:lat,long:long})
        socket?.emit('send-location',location)
    },[socket])
    
   


    return (
        <SocketContext.Provider value={{socket,sendMessage,messages,sendLocation,nearbyUsers}}>
            {children}
        </SocketContext.Provider>
    )
}