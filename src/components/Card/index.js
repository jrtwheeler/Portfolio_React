import React from "react";
import API from "../../utils/github.json";

function Card() {
    if (API) {
        const card = API.projects.map(result => {
            return (
                <div className="card" style={{ width: 30 + 'rem' }}>
                    {/* <img className="card-img-top" src={result.image} /> */}
                    <div className="card-body">
                        <h1 className="card-title">{result.displayName}</h1>
                        <p className="card-text"> {result.description} </p>
                        <a href={result.githubUrl} className="btn btn-primary">Open Github Repo</a>
                        <a href={result.repositoryUrl} className="btn btn-primary">Open Web App</a>
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