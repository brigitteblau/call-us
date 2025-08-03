import React from 'react'
import {SignUp} from '@clerk/nextjs'
const page = () => {
  return (
    <div className='flex  items-center justify-center mt-3'>
<SignUp afterSignUpUrl="/dashboard" afterSignInUrl="/dashboard" />
    </div>
  )
}
export default page
