import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { addPost } from "../actions/posts";
import "./NewLeadForm.css";

const NewLeadForm = () => {
    const history = useHistory();

    const INITIAL_DATA = {
        title: "",
        description: "",
        body: ""
    }

    const [formData, setFormData] = useState(INITIAL_DATA)

    function handleSubmit(e) {
        e.preventDefault();
        // goHome();
    }

    function goHome() {
        setFormData(INITIAL_DATA);
        history.push("/");
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    return (
        <div className="NewLeadForm container p-xl-5 mt-4">
            <form className="form-group">
                <div className="NewLeadForm-row row">
                    <div className="col-lg px-lg-5 pb-5 pb-lg-0">
                        <h3 className="pb-lg-4 pb-3">Contact Information</h3>
                        <label htmlFor="first">First: </label>
                        <input
                            name="first"
                            type="text"
                            value={formData.first}
                            onChange={handleChange}
                            className="form-control"
                        />
                        <br />

                        <label htmlFor="last">Last: </label>
                        <input
                            name="last"
                            type="text"
                            value={formData.last}
                            onChange={handleChange}
                            className="form-control"
                        />
                        <br />

                        <label htmlFor="email">Email: </label>
                        <input
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                        />
                        <br />

                        <label htmlFor="phone">Phone: </label>
                        <input
                            name="phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control"
                        />
                        <br />
                    </div>


                    <div className="col-lg px-lg-5 pb-3 pb-lg-0">
                        <h3 className="pb-lg-4 pb-3">Property Address</h3>
                        <label htmlFor="address">Address: </label>
                        <input
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-control"
                        />
                        <br />

                        <label htmlFor="city">City: </label>
                        <input
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleChange}
                            className="form-control"
                        />
                        <br />

                        <label htmlFor="state">State: </label>
                        <input
                            name="state"
                            type="text"
                            value={formData.state}
                            onChange={handleChange}
                            className="form-control"
                        />
                        <br />

                        <label htmlFor="zipcode">Zip Code: </label>
                        <input
                            name="zipcode"
                            type="text"
                            value={formData.zipcode}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="NewLeadForm-row row">
                    <div className="NewLeadForm-submit-container col-md px-lg-5 pt-3">
                        <button type="submit" onClick={handleSubmit} className="NewLeadForm-submit-btn btn">Submit</button>
                        <p className="pt-3">
                            By submitting this form you are agreeing to allow our team to review your property information and contact you.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewLeadForm;