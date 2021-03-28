
import axios from "axios";

const instance = axios.create({
    // Api Cloud Function url
    // baseURL: "https://us-central1-impar-challenge.cloudfunctions.net/api",
    baseURL: "http://localhost:5001/impar-challenge/us-central1/api",
});

export default instance;