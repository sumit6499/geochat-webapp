'use client'
import React, { useState } from 'react'
import {Alert,AlertDescription,AlertTitle} from '@/components/ui/alert'
import {Button} from '@/components/ui/button'
import {User} from 'lucide-react'

interface UserCard{
    username:string,
    description:string,
}

function UserCard({username,description}:UserCard) {
  const [active,setActive]=useState<boolean>(false)

  const handleClick=()=>{
    setActive(true)
  }

  return (
    <div className="user-cards m-2">
    <Alert>
      <User />
      <AlertTitle>
        {username}
      </AlertTitle>
      <AlertDescription>
        <div className="flex justify-between">
          {description}
          <Button size={'sm'} disabled={active} onClick={handleClick}>{active?"Added":"Add Friend"}</Button>
        </div>
      </AlertDescription>
    </Alert>
  </div>
  )
}

export default UserCard
