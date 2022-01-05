import React from 'react';
import "./card-style.css"

const Card=props=>{
    return(
<diV className="card text-center shadow">
    <div className="overflow">
<img src={props.imgsrc} alt="Assignment Image" className="card-img-top"/>
    </div>

    <div className="card-body text-dark">
<h4 className="card-title">{props.title}</h4>
    <p className="card-text text-secondary">
        Hello mana 
    </p>
    <a href="#" className="btn btn-outline-success">Go any</a>
    </div>
</diV>
    );
}

export default Card;