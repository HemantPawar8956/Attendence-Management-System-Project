import React, { useContext, useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { GlobalVariable } from "./../contextApi/GlobalContext";
import AxiosInstance from "../AxiosInstance/AMSAxiosInstance";

const QRCodeScanner = () => {
  let [fetchData, setfetchData] = useState([]);
  let [scannedData, setScannedData] = useState("");
  let [userData, setUserData] = useState("");
  let { loginType } = useContext(GlobalVariable);

  const handleScan = (data) => {
    console.log("Hello");
    console.log(data);
    if (data) {
      // setScannedData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  let fetchUsers = async () => {
    let { data } = await AxiosInstance.get(`/${loginType}`);
    setfetchData(data);
  };

  console.log(fetchData);
  let userDetails = (id) => {
    let usersData = fetchData.find((element) => element.id == id);
    setUserData(usersData);
  };
  let showResult = (result) => {
    if (typeof result == "object") {
      let resultData = Object.values(result)[0].split("/");
      setScannedData(resultData[0]);
    }
  };

  useEffect(() => {
    userDetails(scannedData);
  }, [scannedData]);

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section className="flex">
      {/* QR Code scanner component */}
      <QrReader
        delay={1000}
        onError={handleError}
        onScan={handleScan}
        onResult={showResult}
        style={{ width: "10%", height: "200px", border: "1px solid" }}
      />

      {/* Display scanned data */}
      {userData != "" && (
        <div className="ScannedData">
          <h2>Scanned Data:</h2>
          <p className="h-48">{userData?.username}</p>
        </div>
      )}
    </section>
  );
};

export default QRCodeScanner;
