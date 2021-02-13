import React from 'react';
import './Homepage.css';
import Navbar from "../Components/Navbar/Navbar"


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
            <h1> Testing</h1>
         
        </div>
    );
}








export default Homepage;