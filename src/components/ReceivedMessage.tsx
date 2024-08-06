import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface IRecievedMessage{
    user:string,
    message:string,
    time:string,
}

function ReceivedMessage({user,message,time}:IRecievedMessage) {
  return (
    <div className="flex items-start gap-4 mb-2" >
    <Avatar>
        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
        <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  <div className="grid gap-1 rounded-lg bg-muted p-3 text-sm">
    <div className="font-medium">{user}</div>
    <div>{message}</div>
    <div className="text-xs text-muted-foreground">{time}</div>
  </div>
</div>
  )
}

export default ReceivedMessage
