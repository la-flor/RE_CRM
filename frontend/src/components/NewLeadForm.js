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
        <div className="NewLeadForm p-5 mt-4">
            <form className="form-group">
                <label htmlFor="title">Title: </label>
                <input
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    className="form-control"
                />
                <br/>

                <label htmlFor="description">Description: </label>
                <input
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control"
                />
                <br/>

                <label htmlFor="body">Body: </label>
                <input
                    name="body"
                    type="text"
                    value={formData.body}
                    onChange={handleChange}
                    className="form-control"
                />
                <br/>
                <button type="submit" onClick={handleSubmit} className="NewLeadForm-saveBtn btn btn-success">Save</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={goHome} className="NewLeadForm-cancelBtn btn btn-warning">Cancel</button>
            </form>
        </div>
    )
}

export default NewLeadForm;