import React from 'react'

const Home = () => {
  let fetchFunction = async () => {
    let resp = await fetch("http://localhost:3000/courses")
    let data = await resp.json()
    console.log(data.departments);
  }
  fetchFunction()
  return (
    <div>
      home comp
    </div>
  )
}

export default Home
