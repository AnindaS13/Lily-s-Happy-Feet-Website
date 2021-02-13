import React from 'react';
import './Homepage.css';
import Navbar from "../Components/Navbar/Navbar";
import Table from 'react-bootstrap/Table';


function Homepage()
{
    return(
        <div >
            <Navbar />
            <div className = "backImage">

                <h1 className = "title">Lily's Happy Feet</h1>
                <h2 className = "subtitle"> A Mobile Footcare Clinic </h2>
                <h3 className = "sentence">loving and compassionate hand and foot care since 2013</h3>
            </div>
            
            <div>
            <h4 style ={{marginLeft: 210, paddingTop: 50, textDecoration: "underline", fontFamily: "Verdana", fontWeight:900}}>BENEFITS</h4>
            <h1 style ={{marginLeft: 210, paddingTop: 25, fontFamily: "Arial", fontSize: 60}}>Taking Care of You Is Our Priority</h1>
            <p style ={{marginLeft: 210, paddingTop: 40, marginRight: 600, fontSize: 30, fontFamily: "Arial"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mattis dictumst praesent volutpat vitae odio nisl, pulvinar. 
            Viverra tellus auctor nibh nulla pellentesque malesuada. 
            </p>
            
            <div className= "rectangle"></div>
            <div className= "rectangle2"></div>
            <div className= "rectangle3"></div>


            </div>
         
        </div>
    );
}








export default Homepage;