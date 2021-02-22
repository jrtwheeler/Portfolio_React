import React from "react";
import API from "../../utils/github";

function Card() {
    if (API) {
        const card = API.projects.map(result => {
            return (
                <div className="card" style={{ width: 30 + 'rem' }}>
                    {/* <img className="card-img-top" src={result.image} /> */}
                    <div className="card-header">
                        <h3 className="card-title">{result.displayName}</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text"> {result.description} </p>
                        {/* <ul class="list-group">
                                <li class="list-group-item">{result.languages}</li>
                            </ul> */}
                    </div>
                    <div>
                        <a href={result.githubUrl} className="btn btn-dark mb-3 mr-1">Open Github Repo</a>
                        <a href={result.repositoryUrl} className="btn btn-dark mb-3 ml-1">Open Web App</a>
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