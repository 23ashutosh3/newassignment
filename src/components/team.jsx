import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

class Team extends Component {

    render() {
        return (
            <CardDeck>
                <Card>
				<CardBody>
                <CardTitle><h1>From the Team Behind ERPNext</h1></CardTitle>
               <CardText>We have been building business software for over a decade now.
				    Learning from our mistakes and picking the best parts of our<br/> flagship product 
				   ERPNext, we came up with a simple app that does one thing well, Accounting</CardText>
               </CardBody>
                    <CardImg height="80%" width="60%" src="https://frappebooks.com/files/frappe-team-mussoorie.webp" alt="comic Poster" />
                </Card>
            </CardDeck>
        );
    }
}

export default Team;