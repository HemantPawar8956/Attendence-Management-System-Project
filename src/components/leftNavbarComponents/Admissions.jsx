import React from 'react'

const Admissions = () => {
  return (
    <div className='border-2 mt-4 h-[83vh] w-[75vw] ms-3'>
      <marquee width="100%" behavior="scroll" bgcolor="orange" height="45vh" className="flex  items-center -tracking-tighter">
        Admissions open for Mechanical Engineering , Civil Engineering , Electrical Engineering , & Computer Engineering.
      </marquee>
      <h1 className='text-center text-3xl pt-6 text-orange-400 font-bold'>Student Admission Form</h1>
      <form action="">
        <section className='w-[100%] pt-3 px-10 flex justify-center flex-col items-center'>
          <main className='flex w-[90%] justify-between '>
            <div className='px-5'>
              <label htmlFor="admissionName" className='block text-slate-400'>Name</label>
              <input type="text" id='admissionName' className='border-2 block rounded-md w-[27vw] h-9 ps-3 mt-1' placeholder='Enter your name' />
            </div>
            <div className='px-5'>
              <label htmlFor="admissionEmail" className='block text-slate-400'>Email Id</label>
              <input type="email" id='admissionEmail' className='border-2 block rounded-md w-[27vw] h-9 ps-3 mt-1' placeholder='Enter Email Id ' />
            </div>
          </main>
          <main className='flex w-[90%] justify-between pt-4 '>
            <div className='px-5'>
              <label htmlFor="admissionYear" className='block text-slate-400'>Year</label>
              <select name="admissionYear" id="admissionYear" className='border-2 block rounded-md w-[27vw] h-9 ps-3 mt-1 text-slate-400'>
                <option value="">Select year</option>
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Final Year">Final Year</option>
              </select>
            </div>
            <div className='px-5'>
              <label htmlFor="admissionDatel" className='block text-slate-400'>Select Date</label>
              <input type="date" id='admissionDate' className='border-2 block rounded-md w-[27vw] h-9 ps-3 mt-1 text-slate-400' placeholder='Select date ' />
            </div>
          </main>
          <main className='flex w-[90%] justify-between pt-4'>
            <div className='px-5'>
              <label htmlFor="admissionPhone" className='block text-slate-400'>Semister</label>
              <select name="admissionSemister" id="admissionSemister" className='border-2 block rounded-md w-[27vw] h-9 ps-3 mt-1 text-slate-400'>
                <option value="">Select semister</option>
                <option value="First Semister">First Semister</option>
                <option value="Second Semister">Second Semister</option>
                <option value="Third Semister">Third Semister</option>
                <option value="Forth Semister">Forth Semister</option>
                <option value="Fifth Semister">Fifth Semister</option>
                <option value="Sixth Semister">Sixth Semister</option>
                <option value="Seventh Semister">Seventh Semister</option>
                <option value="Final Semister">Final Semister</option>
              </select>
            </div>
            <div className='px-5'>
              <label htmlFor="admissionFatherNamel" className='block text-slate-400'>Father's name</label>
              <input type="text" id='admissionFatherName' className='border-2 block rounded-md w-[27vw] h-9 ps-3 mt-1' placeholder="Enter father's name " />
            </div>
          </main>
          <main className='flex w-[90%] justify-between pt-4'>
            <div className='px-5'>
              <label htmlFor="admissionPhone" className='block text-slate-400'>Phone</label>
              <input type="text" pattern="/^[+]91(9|8|7)\d{9}$/" id='admissionPhone' className='border-2 block rounded-md w-[27vw] h-9 ps-3 mt-1' placeholder='Enter your Phone' />
            </div>
            <div className='px-5'>
              <label htmlFor="admissionAddress" className='block text-slate-400'>Address</label>
              <input type="text" id='admissionAddress' className='border-2 block rounded-md w-[27vw] h-9 ps-3 mt-1' placeholder='Enter address ' />
            </div>
          </main>
          <div className=' w-[17vw] flex justify-between pt-5'>
            <button type='submit' className='w-20 bg-orange-400 h-8 rounded-lg text-white hover:bg-orange-300'>submit</button>
            <button className='w-20 bg-gray-500 h-8 rounded-lg text-white hover:bg-gray-400'>Cancel</button>
          </div>
        </section>
      </form>
    </div>
  )
}

export default Admissions