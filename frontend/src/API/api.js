import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

async function submitOfferToAPI(data) {
    try {
        const resp = await axios.post(`${BASE_URL}/newlead`, data);
        if (!resp.data) {
            throw new Error("No response data recieved");
        }
    } catch(err) {
        console.error("There was an error submitting the form.", err);
    }
}

export default submitOfferToAPI;