'use client'
import { SocketContext } from '@/context/SocketProvider'
import React, { FormEvent, useContext, useState,useRef, useEffect} from 'react'
import { SendIcon, User} from 'lucide-react'
import {ScrollArea,ScrollBar} from '@/components/ui/scroll-area'
import UserCard from '@/components/UserCard'
import ReceivedMessage from '@/components/ReceivedMessage'
import UserMessage from '@/components/UserMessage'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const Chats = () => {
    const [message,setMessage]=useState('')
    const inputRef=useRef<HTMLTextAreaElement>(null)
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
        },7000)
        
        return ()=>{
          clearInterval(intervalId)
        }
      }

    },[socket])

    const handleClick=(e:FormEvent<HTMLButtonElement>)=>{
        setMessage(inputRef.current?.value as string)
        socket?.sendMessage(message)
    }


  return (
    <div className="flex max-w-full items-center space-x-2  ">

      {/* nearby-user section  */}

      <div className="nearby-user flex-1 max-sm:hidden">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Nearby Users
        </h2>
        <ScrollArea  className='h-[calc(100vh-120px)]'>
          {[1,2,3,4,5,6,7,8,9,10].map((data)=>(
            <UserCard username='John Doe' description='John Doe is 1KM near to you!' key={data}/>
          ))}
          <ScrollBar orientation="vertical" />
        </ScrollArea>
       
      </div>


      {/* chats section  */}
      <div className="chats min-w-[50%] border flex-1">
        <div className="user-status flex max-sm:p-3 space-x-4 mb-3 border-b">
          <User/>
          <div className="user-status">
            <h1 className='font-semibold'>John Doe</h1>
            <span className='text-muted-foreground'>Online</span>
          </div>
        </div>
        <ScrollArea className="flex-1 overflow-auto px-2 h-[calc(100vh-250px)]">
            {[1,2,3,4,5,6,7].map(()=>(
              <>
                 <ReceivedMessage user='John Doe' message={"Hey, how's it going?"} time='3:45 PM'/>
                 <UserMessage message={'Doing great, thanks for asking!'} time={'3:46 PM'}/>
              </>
                
            ))}
        </ScrollArea>
        <div className="sticky bottom-0 border-t p-2">
          <div className="relative">

            <Textarea
              placeholder="Type your message..."
              className="min-h-[48px] w-full resize-none rounded-2xl border border-neutral-400 p-4 pr-16 shadow-sm"
              ref={inputRef}
            />

           <Button type="submit" size="icon" className="absolute top-3 right-3" onClick={handleClick}>
            <SendIcon className="h-5 w-5" />
            <span className="sr-only">Send</span>
           </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Chats
