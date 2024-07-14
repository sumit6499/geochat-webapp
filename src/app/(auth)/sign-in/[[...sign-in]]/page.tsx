
import {SignIn} from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className='w-full min-h-[calc(100vh-80px)] flex justify-center items-center'>
        <SignIn />
    </main>
  )
}

export default SignInPage
