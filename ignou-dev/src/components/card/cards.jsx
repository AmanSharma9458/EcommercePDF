import React from "react";
import Card from "./card";
import Image from "../../assets/assignment.jpeg"

class Cards extends React.Component{
    
    render()
    {
        return(
            <div className="container-fluid d-flex justify-ontent-center">
                <div className="row">
                    <div className="col-md-4"><Card imgsrc={Image} title="Aman"/></div>
                    <div className="col-md-4"><Card imgsrc={Image}/></div>
                    <div className="col-md-4"><Card imgsrc={Image}/></div>
                    <div className="col-md-4"><Card imgsrc={Image} title="Aman"/></div>
                    <div className="col-md-4"><Card imgsrc={Image}/></div>
                    <div className="col-md-4"><Card imgsrc={Image}/></div>
                </div>
            </div>
        );
    }
}

export default Cards;
