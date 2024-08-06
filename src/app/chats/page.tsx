'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SocketContext } from '@/context/SocketProvider'
import React, { FormEvent, useContext, useState,useRef, useEffect, lazy } from 'react'


const Chats = () => {
    const [message,setMessage]=useState('')
    const ref=useRef<HTMLInputElement>(null)
    const socket=useContext(SocketContext)

    useEffect(()=>{
      if(navigator.geolocation){
        const intervalId=setInterval(()=>{
          navigator.geolocation.getCurrentPosition((pos)=>{
            socket?.sendLocation(pos.coords.latitude,pos.coords.longitude)
          },(error)=>{
            console.log(error)
          },{
            enableHighAccuracy:true,
          })
        },5000)
        
        return ()=>{
          clearInterval(intervalId)
        }
      }

    },[socket])

    const handleClick=(e:FormEvent<HTMLButtonElement>)=>{
        setMessage(ref.current?.value as string)
        socket?.sendMessage(message)
    }


  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Enter your message" ref={ref} onChange={(e)=>setMessage(e.target.value)}/>
      <Button type="submit" onClick={handleClick}>Send</Button>
      <div className="msg">
        {socket?.messages.map((msg,index)=>(
            <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  )
}

export default Chats
