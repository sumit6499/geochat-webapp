'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import {io,Socket} from 'socket.io-client'

interface SocketProivderProps{
    children?:React.ReactNode
}
interface ISocketContext{
    socket:Socket|null,
    messages:String[],
    sendMessage:(msg:string)=>void,
    sendLocation?:(location:string)=>void
}



export const SocketContext=createContext<ISocketContext|null>(null)



export const SocketProvider:React.FC<SocketProivderProps>=({children})=>{
    
    const [socket,setSocket]=useState<Socket|null>(null)
    const [messages,setMessages]=useState<string[]>([])

    const sendMessage:ISocketContext['sendMessage']=useCallback((msg)=>{
        socket?.emit('event:message',msg,(msg:string)=>{
            setMessages((prev)=>[...prev,msg])
        })
    },[socket])

    console.log(messages)
    useEffect(()=>{
        const socket=io('http://localhost:8000')
        setSocket(socket)
        return ()=>{
            socket.disconnect()
            setSocket(null)
        }
    },[])

    return (
        <SocketContext.Provider value={{socket,sendMessage,messages}}>
            {children}
        </SocketContext.Provider>
    )
}