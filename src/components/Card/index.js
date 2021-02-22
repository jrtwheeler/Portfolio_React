import React from "react";
import API from "../../utils/github";
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLink } from "react-icons/fa";

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
                        <a href={result.githubUrl} rel="noreferrer" target="blank" className="btn btn-dark ml-3 mb-3 mr-1"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                        <a href={result.repositoryUrl} rel="noreferrer" target="blank" className="btn btn-dark mb-3 ml-1"><FaLink/></a>
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