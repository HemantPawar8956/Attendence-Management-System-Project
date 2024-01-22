import React from 'react'

const Enterprise = () => {
    return (
        <div id='enterpriseMainDiv' className='border-2 mt-4 h-[83vh] w-[75vw] ms-3 flex flex-wrap  overflow-y-auto'>
            <div className='flex'>
                <section className='w-[48vw] h-[80vh] ps-8'>
                    <h1 className='text-orange-400 text-5xl pt-32 font-bold'>Welcome To <br /> "Project Education Factory"</h1>
                    <p className='text-slate-600 pt-11 text-xl'>Comprehensive set of modules to help you manage every aspect of coaching, from admission, attendence, lectures, tests, fees & more.</p>
                </section>
                <div id='enterpriseDiv'></div>
            </div>
            <div className='flex'>
                <div id='enterpriseDiv1'></div>
                <section className='w-[48vw] h-[80vh]'>
                    <h1 className='text-orange-400 text-5xl pt-36 font-bold'>SUMS simplifies all aspects of college management.</h1>
                    <p className='text-slate-600 pt-11 text-xl'>Efficiently manage addmissions, attendance, exams, finance, data and much more through one single platform.</p>
                </section>
            </div>
            <div className='flex'>
                <section className='w-[48vw] h-[80vh] ps-8'>
                    <h1 className='text-orange-400 text-5xl pt-36 font-bold'>All in one platform for coaching business to thrive!</h1>
                    <p className='text-slate-600 pt-11 text-xl'>Generate reports on finance, progress & more with precision and speed.</p>
                </section>
                <div id='enterpriseDiv2' ></div>
            </div>
        </div>
    )
}

export default Enterprise