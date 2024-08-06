import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { ScrollArea } from './ui/scroll-area'

interface ChatArea{
    avatarFallBack:string,
    user:string,
}

function ChatArea({avatarFallBack,user}:ChatArea) {
  return (
    <ScrollArea className="flex-1 overflow-auto">
          <div className="grid gap-4 p-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 rounded-lg bg-muted p-3 text-sm">
                <div className="font-medium">{user}</div>
                <div>Hey, {"how's"} it going?</div>
                <div className="text-xs text-muted-foreground">3:45 PM</div>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="grid gap-1 rounded-lg bg-primary p-3 text-sm text-primary-foreground">
                <div>Doing great, thanks for asking!</div>
                <div className="text-xs text-muted-foreground">3:46 PM</div>
              </div>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 rounded-lg bg-muted p-3 text-sm">
                <div className="font-medium">John Doe</div>
                <div>{"That's"} great to hear! {"I'm"} free this weekend, would you like to grab coffee?</div>
                <div className="text-xs text-muted-foreground">3:47 PM</div>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="grid gap-1 rounded-lg bg-primary p-3 text-sm text-primary-foreground">
                <div>Sounds good, {"I'd"} love that! {"Let's"} plan it out.</div>
                <div className="text-xs text-muted-foreground">3:48 PM</div>
              </div>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </ScrollArea>
  )
}

export default ChatArea
