import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import './field.css'
class Field extends Component {

    render() {
        return (
            <div className="resourse">  
				<div className="first">
					 <Card style={{ width: '21.7rem', height:'16rem' }}>
                     <CardBody>
                    <CardTitle><h2>Journal Entries</h2></CardTitle>
                    <CardText><p>Record ad-hoc accounting entries for entering<br/> expenses, opening entires, and <br/>bank payments..</p></CardText>
                    </CardBody>
                    </Card>
	            </div>
				<div className="first">
					 <Card style= {{ width: '21.7rem', height:'16rem' }}>
                     <CardBody>
                    <CardTitle><h2>Invoice Template</h2></CardTitle>
                    <CardText>Beautiful Invoice templates that you can further <br/>
					customize with the color and 
					<br/>logo of your brand.</CardText>
                    </CardBody>
                    </Card>
	            </div>

                <div className="first">
                  <Card style= {{ width: '21.7rem', height:'16rem' }}>
                   <CardBody>
                    <CardTitle><h2>Works Offline</h2></CardTitle>
                         <CardText><p>Frappe Books is free software. This<br/> means it comes with the four 
                             essential freedoms. <br/>You are allowed to run it as 
                             you wish, you can<br/> look at its source code and modify it.</p> </CardText>
                    </CardBody>
                   </Card>
                 </div>
			
            	<div className="first">
					 <Card style= {{ width: '21.7rem', height:'16rem' }}>
                     <CardBody>
                    <CardTitle><h2>Privacy By default</h2></CardTitle>
                    <CardText><p>Frappe Books uses a local file from<br/> your computer
						 and when you create invoices, it saves 
						 <br/>them on your local machine.</p></CardText>
						</CardBody>
                    </Card>
	            </div>





				<div className="first">
					 <Card style={{ width: '21.7rem', height:'16rem' }}>
                     <CardBody>
                    <CardTitle><h2>Portable</h2></CardTitle>
                    <CardText><p>Frappe Books uses the lightweight SQLite database which uses simple files to store their data..</p></CardText>
                    </CardBody>
                    </Card>
	            </div>
				<div className="first">
					 <Card style= {{ width: '21.7rem', height:'16rem' }}>
                     <CardBody>
                    <CardTitle><h2>No Cloud</h2></CardTitle>
                    <CardText>Cloud apps make you dependent on service provider. A service like<br/>
						      that is never truly free, and it does not have to be<br/>
						 like that. With desktop </CardText>
                    </CardBody>
                    </Card>
	            </div>

                <div className="first">
                  <Card style= {{ width: '21.7rem', height:'16rem' }}>
                   <CardBody>
                    <CardTitle><h2>Free And Open Sources</h2></CardTitle>
                         <CardText><p>Frappe Books is free software. This<br/> means it comes with the four 
                             essential <br/> look at its source code and modify it.</p> </CardText>
                    </CardBody>
                   </Card>
                 </div>
			
            	<div className="first">
					 <Card style= {{ width: '21.7rem', height:'16rem' }}>
                     <CardBody>
                    <CardTitle><h2>Modern Web Friendly UI</h2></CardTitle>
                    <CardText><p>Frappe Books is built with our homegrown<br/>bundled with Electron. But it is still designed <br/>
						in a way how a desktop software functions.</p></CardText>
						</CardBody>
                    </Card>
	            </div>
			
		</div>
              
            
        );
    }
}

export default Field;



