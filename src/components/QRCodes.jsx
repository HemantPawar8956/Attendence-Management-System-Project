import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const QRCodes = ({ data: { state, setOpenQR, openQR } }) => {
  let dates = new Date();
  let [userData, setUserData] = useState({
    id: state?.id,
    username: state?.username,
    role: state?.role,
    date: `${dates.getDate()}-${dates.getMonth() + 1}-${dates.getFullYear()}`,
  });
  console.log(state);
  let { id, username, date, role } = userData;

  let closeQRCode = (e) => {
    e.stopPropagation();
    setOpenQR(false);
  };
  return (
    <article
      className="w-[100%] h-[100vh] flex justify-center items-center fixed Qrpage"
      onClick={closeQRCode}
    >
      <article
        className="w-[22%] h-[54%] border-2 Qrcodes rounded-md flex justify-center content-evenly flex-wrap "
        onClick={(e) => {
          e.stopPropagation();
          setOpenQR(true);
        }}
      >
        <h1 className="w-[100%] text-xl border-b-2 p-4 py-2">
          QR Code
          <MdClose
            className="float-right bg-white text-black rounded-sm hover:bg-slate-200"
            onClick={closeQRCode}
          />
        </h1>
        <main className="w-[85%] h-[75%] flex justify-center items-center bg-white rounded-md py-2">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data="${id}/${username}/${role}/${date}"&amp;`}
            alt="QR Code"
            className="w-[87%] "
          />
        </main>
      </article>
    </article>
  );
};

export default QRCodes;
