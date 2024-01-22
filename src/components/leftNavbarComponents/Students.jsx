import React, { useState, useEffect } from 'react';

const Students = () => {
  const [mechStudents, setMechStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/Mechanical');
        const data = await response.json();
        console.log(data);
        setMechStudents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  return (
    <div className='border-2 mt-4 h-[83vh] w-[75vw] ms-3'>
      {mechStudents.map((val, ind) => (
        <div key={ind}>
          <h1>{val.Name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Students;
