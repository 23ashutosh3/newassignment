import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import './service.css'
class Service extends Component {

    render() {
        return (
            <CardDeck className="card1" >
                <Card className="card1" >
                <CardBody>
          <CardTitle><h1>Free Desktop Accounting Software<br/> for Small Businesses</h1></CardTitle>
          <CardText><h4 >Frappe Books simplifies invoicing, billing, and accounting 
              <br/>for freelancers and small business owners.</h4></CardText>
          <Button className="button">Button</Button>
        </CardBody>

                </Card>
            </CardDeck>
        );
    }
}

export default Service;