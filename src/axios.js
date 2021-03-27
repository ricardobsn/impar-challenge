  
import axios from "axios";

const instance = axios.create({
  // Api Url firebase emulators:start
  // baseURL: "http://localhost:5001/clone-6bd90/us-central1/api",
  baseURL: "https://us-central1-clone-6bd90.cloudfunctions.net/api",
});

export default instance;