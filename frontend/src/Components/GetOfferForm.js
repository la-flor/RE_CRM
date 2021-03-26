import { useState } from "react";
import "./GetOfferForm.css";

const GetOfferForm = () => {
    const [formData, setFormData] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        setFormData(e.target.value);
    }

    return (
        <div className="GetOfferForm col-sm-5">
            <form className="GetOfferForm-form" onSubmit={handleSubmit}>
                <input
                    className="GetOfferForm-input"
                    type="text"
                    name="Address"
                    placeholder="Enter your home address..."
                    value={formData.value}
                    onChange={handleChange}
                />
                <button className="GetOfferForm-btn btn">GET AN OFFER!</button>
            </form>
        </div>
    )
}

export default GetOfferForm;