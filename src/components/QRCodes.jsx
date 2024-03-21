import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const QRCodes = () => {
  let dates = new Date();
  let [userData, setUserData] = useState({
    id: "1972",
    username: "Hemant Vijay Pawar",
    date: `${dates.getDate()}-${dates.getMonth() + 1}-${dates.getFullYear()}`,
  });
  let { id, username, date } = userData;
  console.log(userData);
  return (
    <article className="w-[100%] h-[100%] flex justify-center items-center Qrpage">
      <article className="w-[25%] h-[60%] border-2 Qrcodes rounded-md flex justify-center content-evenly flex-wrap ">
        <h1 className="w-[100%] text-xl border-b-2 p-4">
          QR Code
          <MdClose className="float-right bg-white text-black rounded-sm" />
        </h1>
        <main className="w-[75%] h-[74%] flex justify-center items-center bg-white rounded-md">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data="${id}/${username}/${date}"&amp;size=170x170`}
            alt="QR Code"
          />
        </main>
      </article>
    </article>
  );
};

export default QRCodes;
