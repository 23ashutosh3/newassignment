import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

class Graph extends Component {

    render() {
        return (
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="https://frappebooks.com/files/frappebooks-hero.png" alt="Movie Poster" />
                </Card>
            </CardDeck>
        );
    }
}

export default Graph;