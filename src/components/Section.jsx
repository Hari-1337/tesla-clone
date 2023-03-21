import React from "react";
import '../styles/Section.css'
import { Fade } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";

export default function Section(props){
    const styles={
        backgroundImage:`url('/images/${props.bgImg}')`,
    }
    
    
    return(
        <div className="section--main" style={styles}> 
        <div className="secction--text">
            
            <Bounce>
            <Fade cascade>
                  <h1 className="text head">{props.title}</h1>
                    <p className="text para">Leasing starting at $349/month</p>
            </Fade>
            </Bounce>   
            
        </div>
       
            <Fade>
            <div className="btns">
                <button className="btn ">Custom Order</button>
                <button className="btn btn2">Demo Drive</button>
            </div>
            </Fade>
            
        </div>
    );
}