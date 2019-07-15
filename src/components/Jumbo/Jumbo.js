import React from "react";
import "./Jumbo.css";

const Jumbo = props => (
    <div>
        <div className="jumbotron">
            <h1 className="display-4">South Park Clicky Characters!</h1>
            <h2>Click on the characters to earn a point. Click on a character twice and you lose.</h2>
            <hr className="my-4"></hr>
            <ul>
                <li id="currentScore">Current Score: {props.currentScore}</li>
                <li id="highScore">High Score: {props.highScore}</li>
                <li id="message">{props.message}</li>
            </ul>
           
            
        </div>
    </div>
);




export default Jumbo;