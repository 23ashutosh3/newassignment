
import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

import { Tab, Tabs } from 'react-bootstrap';

//let { Tab, Tabs } = ReactBootstrap;

class MyComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // Takes active tab from props if it is defined there
      activeTab: props.activeTab || 1
    };
    
    // Bind the handleSelect function already here (not in the render function)
    this.handleSelect = this.handleSelect.bind(this);
  }
  
  render() {
    return (
		<div >
		<Card style= {{ width: '80.7rem', height:'12rem' }}>
		 <CardBody>
		  <CardTitle><h1>Everythimg You need</h1></CardTitle>
			   <CardText><p>Create professional invoices, generate beautiful PDFs and send them to your customers</p> </CardText>
		  </CardBody>

		 
		 </Card>
		 <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
        <Tab eventKey={1} title="Dashboard"><img src="https://frappebooks.com/files/books-dashboarda2ada9.png" alt="abc" width="100%" height="600" ></img></Tab>
        <Tab eventKey={2} title="Invoicing"><img src="https://frappebooks.com/files/invoicing.png" alt="abc" width="100%" height="600" ></img></Tab>
        <Tab eventKey={3} title="Payments" disabled><img src="https://frappebooks.com/files/payments.webp" alt="abc" width="100%" height="600" ></img></Tab>
        <Tab eventKey={4} title="Financial Report"><img src="https://frappebooks.com/files/report-pnl.png" alt="abc" width="100%" height="600" ></img></Tab>
        <Tab eventKey={5} title="Ledger"><img src="https://frappebooks.com/files/books-general-ledger.png" alt="abc" width="100%" height="600" ></img></Tab>
      </Tabs>
	   </div>
	
	
    
    );
  }
  
  handleSelect(selectedTab) {
    // The active tab must be set into the state so that
    // the Tabs component knows about the change and re-renders.
    this.setState({
      activeTab: selectedTab
    });
  }
}

export default  MyComponent;
//ReactDOM.render(
//  <MyComponent activeTab={4} />,
//  document.getElementsByClassName('container')[0]
//);