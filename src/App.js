import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Books from './components/books'
import Cartoon from './components/cartoon'
import Resource from './components/resourse'
import Team from './components/team';
import Field from './components/field';
import Tab from './components/Tab';
import Service from './components/Service'
import 'bootstrap/dist/css/bootstrap.min.css'
//var React = require('react');
//var Component = React.Component;
//var CanvasJSReact = require('./canvasjs.react');
//var CanvasJS = CanvasJSReact.CanvasJS;

function App() {
    return ( 
        <div className = "App" >
        <Navbar/>
        <Books/>

        <Cartoon/>
        <Tab/>
        <Resource/>
        
        <Team/>
        <Field/>
        <Service/>
        </div>
    );
}

export default App;