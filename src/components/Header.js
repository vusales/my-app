import React from "react" ; 
import "./dice.css" ;  

class Header extends React.Component{
   
    render() {
        return(
            <React.Fragment>
                <div className="d-flex align-items-center justify-content-center mt-5">
                    <h1 className="tittle">ROLLING DICE</h1>
                </div>
            </React.Fragment>
        )
    }
}




export default Header ; 