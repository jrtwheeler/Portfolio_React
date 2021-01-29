import React from "react";

function Card(props) {

    if (props.results) {
        const card = props.results.map(result => {
            return (
                <div className="card" style={{ width: 30 + 'rem' }}>
                    <img className="card-img-top" src={props.image} />
                    <div className="card-body">
                        <h1 className="card-title">{props.title}</h1>
                        <p className="card-text"> {props.description} </p>
                        <a href={props.github} className="btn btn-primary">Open Github Repo</a>
                        <a href={props.webpage} className="btn btn-primary">Open Web App</a>
                    </div>
                </div>
            )
        })
        return (
            <div className="row">
                {card}
            </div>
        )
    }
}

export default Card;