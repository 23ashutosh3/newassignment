import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import './resourse.css'
class Resource extends Component {

    render() {
        return (
            <div className="resourse">  
				<div className="first1">
					 <Card >
                     <CardBody>
                    <CardTitle><h2>Small Business Accounting</h2></CardTitle>
                    <CardText><p>Everything you need from a small, simple small<br/>
					 business accounting tool. Billing, Payments, Ledgers<br/>,
					  Invoices, Reporting. A fully featured replacement for<br/> tools like GNU Cash and Tally.</p></CardText>
                    </CardBody>
                    </Card>
	            </div>
				<div className="first2">
					 <Card >
                     <CardBody>
                    <CardTitle><h2>No Cloud</h2></CardTitle>
                    <CardText>Cloud apps make you dependent on service provider. A service like<br/>
						      that is never truly free, and it does not have to be<br/>
						 like that. With desktop apps, you have much more 
						 <br/>control over your data.</CardText>
                    </CardBody>
                    </Card>
	            </div>

                <div className="first3">
                  <Card >
                   <CardBody>
                    <CardTitle><h2>Free And Open Sources</h2></CardTitle>
                         <CardText><p>Frappe Books is free software. This<br/> means it comes with the four 
                             essential freedoms. <br/>You are allowed to run it as 
                             you wish, you can<br/> look at its source code and modify it.</p> </CardText>
                    </CardBody>
                   </Card>
                 </div>
			
            	<div className="first4">
					 <Card >
                     <CardBody>
                    <CardTitle><h2>Modern Web Friendly UI</h2></CardTitle>
                    <CardText><p>Frappe Books is built with our homegrown<br/> framework FrappeJS which 
						is based on NodeJS and <br/>bundled with Electron. But it is still designed <br/>
						in a way how a desktop software functions.</p></CardText>
						</CardBody>
                    </Card>
	            </div>
			
		</div>
              
            
        );
    }
}

export default Resource;



