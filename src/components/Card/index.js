import React from "react";
import API from "../../utils/github";
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLink } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

function Card() {
    if (API) {
        const card = API.projects.map(result => {
            return (
                <div className="card" style={{ width: 30 + 'rem' }}>
                    <div className="card-header">
                        <h3 className="card-title">{result.displayName}</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text"> {result.description} </p>
                    </div>
                    <div>
                        <ReactTooltip
                            id="gitHub"
                            place="bottom"
                            effect="solid"
                            backgroundColor="#4A6479"
                        >
                            Open GitHub Repo
                        </ReactTooltip>

                        <ReactTooltip
                            id="app"
                            place="bottom"
                            effect="solid"
                            backgroundColor="#4A6479"
                        >
                            Open App
                        </ReactTooltip>

                        <a href={result.githubUrl} rel="noreferrer" target="blank" className="btn btn-dark ml-3 mb-3 mr-1" data-tip
                            data-for="gitHub"><FontAwesomeIcon icon={['fab', 'github']} /></a>

                        <a href={result.repositoryUrl} rel="noreferrer" target="blank" className="btn btn-dark mb-3 ml-1" data-tip
                            data-for="app"><FaLink /> </a>
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