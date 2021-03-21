import React from "react";
import NewLeadForm from "./NewLeadForm";
import "./NewLeadPage.css";

const NewLeadPage = () => {
    return (
        <div className="NewLeadPage">
            <div className="NewLeadPage-banner m-5 px-5">
                <span className="NewLeadPage-title">Ready to sell?</span>
                <span className="NewLeadPage-linkhome">
                    <a href="/">Home</a>
                </span>
            </div>
            <NewLeadForm />
        </div>
    )
}

export default NewLeadPage;