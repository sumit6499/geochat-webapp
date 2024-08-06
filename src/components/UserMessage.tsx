import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface IUserMessage{
    message:string,
    time:string,
}

const UserMessage:React.FC<IUserMessage> = ({message,time}) => {
  return (
    <div className="flex items-start gap-4 justify-end">
    <div className="grid gap-1 rounded-lg bg-primary p-3 text-sm text-primary-foreground">
      <div>{message}</div>
      <div className="text-xs text-muted-foreground">{time}</div>
    </div>
    <Avatar>
      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  </div>
  )
}

export default UserMessage
