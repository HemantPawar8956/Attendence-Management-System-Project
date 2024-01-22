import React from 'react'

const SignUp = () => {
  return (
    <div className='flex' id='signupMainDiv'>
      <section id="signupPageSection" className='w-[58%] h-[85vh]' >
      </section>
      <section className='w-[40vw] h-[70vh]'>
        <h1 className='font-normal pt-12 text-3xl text-center text-slate-600'>Signup Here</h1>
        <form action="" className='p-10'>
          <label htmlFor="username" className='block text-slate-400'>Username</label>
          <input type="text" id='username' className='border-2 block rounded-md w-[100%] h-9 ps-3 mt-1' placeholder='Create username' />
          <label htmlFor="password" className='block text-slate-400 mt-3'>Password</label>
          <input type="text" id='password' className='border-2 block rounded-md w-[100%] h-9 ps-3 mt-1' placeholder='Create Password' />
          <label htmlFor="Confirm" className='block text-slate-400 mt-3'>Confirm Password</label>
          <input type="text" id='Confirm' className='border-2 block rounded-md w-[100%] h-9 ps-3 mt-1 mb-2' placeholder='Confirm Password' />
          <label htmlFor="" className='text-slate-400'>Sign up as  </label>
          <div className='pt-1 w-[100%] flex justify-between'>
            <div>
              <input type="radio" id='Principal' className='bg-gray-500' value="principal" name='role' />
              <label htmlFor="Principal" className='ms-1 text-slate-400' >Principal</label>
            </div>
            <div>
              <input type="radio" id='teachingStaff' className='bg-gray-500' value="teachingStaff" name='role' />
              <label htmlFor="teachingStaff" className='ms-1 text-slate-400' >Teaching staff</label>
            </div>
            <div>
              <input type="radio" id='nonTeachingStaff' className='bg-gray-500' value="nonTeachingStaff" name='role' />
              <label htmlFor="nonTeachingStaff" className='ms-1 text-slate-400' >Non teaching staff</label>
            </div>
            <div>
              <input type="radio" id='student' className='bg-gray-500' value="student" name='role' />
              <label htmlFor="student" className='ms-1 text-slate-400' >Student</label>
            </div>
          </div>
          <div className='w-50%  flex justify-center mt-6'>
            <div className=' w-[15vw] flex justify-between'>
              <button className='w-20 bg-orange-400 h-8 rounded-lg text-white hover:bg-orange-300'>Sign up</button>
              <button className='w-20 bg-gray-500 h-8 rounded-lg text-white hover:bg-gray-400'>Cancel</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default SignUp
