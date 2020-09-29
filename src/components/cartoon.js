import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

class Cartoon extends Component {

    render() {
        return (
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="https://frappebooks.com/files/books-comic-homepage.jpeg" alt="comic Poster" />
                </Card>
            </CardDeck>
        );
    }
}

export default Cartoon;