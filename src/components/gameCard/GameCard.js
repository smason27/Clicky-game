import React from "react";
import "./Gamecard.css"

const GameCard = props => (
    <div onClick={() => props.selectedCharacter(props.id)} className="card">
        <div>
            <img src={props.Url} className="card-img-top" alt={props.name} />
            <div className="characterName">
                <strong>{props.name}</strong>
            </div>
        </div>

    </div>
)

export default GameCard;