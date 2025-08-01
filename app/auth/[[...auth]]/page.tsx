import React from 'react'
import {SignUp} from '@clerk/nextjs'
const page = () => {
  return (
    <div className='flex  items-center justify-center mt-3'>
<SignUp signInFallbackRedirectUrl="/dashboard" />
    </div>
  )
}
// aca despues hay que hacer que  dashboard tenga todo y de ahi vayan a form si quieren crear otra ia 
export default page
