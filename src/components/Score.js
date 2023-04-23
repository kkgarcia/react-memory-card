import React from "react";

const Score = ({ score, best }) => {
    return (
        <div className="score-wrapper">
            <div className="current score">{`Current score: ${score}`}</div>
            <div className="best score">{`Best score: ${best}`}</div>
        </div>
    )
}

export default Score