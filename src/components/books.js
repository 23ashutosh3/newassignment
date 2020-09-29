import React from 'react';
import Graph from './graph';
import 'bootstrap/dist/css/bootstrap.min.css'
import Download from './dowload'
import './books.css'

function Books() {
  return (
    <div class="Books" >
    <div className="down"><Download /></div> 
  	<div className="graph"> <Graph/></div>
    </div>
  );
}

export default Books;
