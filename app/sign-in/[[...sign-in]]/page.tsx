import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex justify-center items-center min-h-screen my-2'>
      <SignIn />
    </div>
  )
}