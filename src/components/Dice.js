import React from "react" ; 
// import PropTypes from "prop-types"; 
import "./dice.css" ;  

class Dice extends React.Component{
    static defaultProps = {
        num : "one"  ,
        rolling: false , 

    }

    render() {
        return(
            <React.Fragment>
                <div className= {`die fas fa-dice-${this.props.num}  ${this.props.rolling && "shaking"}`}></div>
            </React.Fragment>
        )
    }
}

// Dice.PropTypes = {
//     num: PropTypes.oneOf(["one" , "two", "three" , "four", "five", "six" ]) , 
// }


export default Dice ; 