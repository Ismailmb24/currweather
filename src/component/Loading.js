import React from "react";
import { PulseLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="loader" style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "45Vh",
        }}>
            <PulseLoader color="#ff4810" />
        </div>
        
    );
}