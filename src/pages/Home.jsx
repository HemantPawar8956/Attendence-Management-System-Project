import React from "react";
import AsideComp from "./../components/AsideComp";

const Home = () => {
  let fetchFunction = async () => {
    let resp = await fetch("http://localhost:3000/departments")
    let data = await resp.json()
    console.log(data);
    data.map((val, index) => {
      let allFaculty = val.faculty.map((facultyName, ind) => {
          console.log(facultyName);
      })
    })
  }
  fetchFunction()
  return (
    <div>
      
    </div>
  )
}

export default Home;
