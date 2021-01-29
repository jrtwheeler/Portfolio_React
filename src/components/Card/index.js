import React from "react";
import Projects from './projects.json';

function Card() {

    if (Projects) {
        const card = Projects.map(result => {
            return (
                <div className="card" style={{ width: 30 + 'rem' }}>
                    <img className="card-img-top" src={result.image} />
                    <div className="card-body">
                        <h1 className="card-title">{result.title}</h1>
                        <p className="card-text"> {result.description} </p>
                        <a href={result.github} className="btn btn-primary">Open Github Repo</a>
                        <a href={result.webpage} className="btn btn-primary">Open Web App</a>
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