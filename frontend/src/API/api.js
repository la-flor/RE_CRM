import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

async function submitOfferToAPI(data) {
    try {
        const resp = await axios.post(`${BASE_URL}/new_lead`, data);
        if (!resp.data) {
            throw new Error("No response data recieved");
        }
        console.log("Customer information succesfully submitted.")
    } catch(err) {
        console.error("There was an error submitting the form.", err);
    }
}

export default submitOfferToAPI;