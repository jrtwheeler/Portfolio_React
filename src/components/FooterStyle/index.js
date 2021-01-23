import React from "react";
import { Card, Footer } from 'react-bootstrap';

function FooterStyle(props) {
    return (
<Card.Footer className="text-muted">
<p>
    {props.children}
</p>
</Card.Footer>
);
}

export default FooterStyle;