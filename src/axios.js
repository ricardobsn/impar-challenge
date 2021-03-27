
import axios from "axios";

const instance = axios.create({
    // Api Url firebase emulators:start
    //   baseURL: "https://us-central1-clone-6bd90.cloudfunctions.net/api",
    baseURL: "http://localhost:5001/impar-challenge/us-central1/api",
});

export default instance;