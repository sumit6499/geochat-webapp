import React from 'react'
import Link from 'next/link'
import {ModeToggle} from '@/components/ToggleTheme'
import {Menu,LocateIcon} from 'lucide-react'
import {SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/nextjs'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from './ui/button'
  

const Navbar = () => {
  return (
    <header className='flex  w-full min-h-14 lg:px-6 bg-background p-4  items-center border-b '>
        <div className="logo flex gap-2 items-center">
            <Link href={'/'} prefetch={false}>
                <LocateIcon />
            </Link>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight dark:text-white">
                GeoChat
            </h4>
        </div>


        <div className="mobile-nav flex sm:invisible ml-auto gap-2">
        <nav className='flex sm:hidden'>
          <SignedIn>
              <UserButton />
          </SignedIn>
          <SignedOut>
              <Button>
                <SignInButton />
              </Button>
          </SignedOut>
        </nav>

            <Sheet >
                <SheetTrigger >
                    <div className="menu ">
                        <Menu size={28}/>
                    </div>
                </SheetTrigger>
                <SheetContent side={'left'} >
                        <SheetHeader className='mt-4'>
                            <SheetTitle className='flex justify-between items-center'>
                                <div className="flex small-nav items-center text-2xl gap-2">
                                <LocateIcon />
                                GeoChat
                                </div>
                                 <ModeToggle/>
                            </SheetTitle>
                        <SheetDescription className='flex flex-col space-y-3 '>
                            <Link href={'/feature'} className='mt-8  p-3 rounded-lg'>
                                Feature
                            </Link>
                            <Link href={'/pricing'} className=' p-3 rounded-lg'>
                                pricing
                            </Link>
                            <Link href={'/about'} className=' p-3 rounded-lg'>
                                about
                            </Link>
                            <Link href={'/contact'} className=' p-3 rounded-lg'>
                                Contact
                            </Link>
                                  
                        </SheetDescription>
                        </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>


        

        <nav className={`ml-auto hidden sm:flex gap-4 sm:gap-6 items-center`}>
        <ModeToggle/>
          <Link href="/feature" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
              <SignedIn>
                  <UserButton />
              </SignedIn>
              <SignedOut>
                  <Button>
                    <SignInButton />
                  </Button>
              </SignedOut>
             
        </nav>

        
    </header>
  )
}

export default Navbar
