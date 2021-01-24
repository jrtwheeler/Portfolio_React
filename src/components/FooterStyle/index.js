import React from "react";
import { Card, Footer } from 'react-bootstrap';

function FooterStyle(props) {
    return (
<Card.Footer className="card-footer text-muted text-center">
<p>
    {props.children}
</p>
</Card.Footer>
);
}

export default FooterStyle;