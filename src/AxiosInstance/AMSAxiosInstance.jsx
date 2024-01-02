import axios from "axios";
let Base_Url = "http://localhost:3000";

let AxiosInstance = axios.create({
 baseURL:Base_Url,
//   timeout: 10000,
});

export default AxiosInstance;
