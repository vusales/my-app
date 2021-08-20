import React from "react" ; 
import Dice from "./Dice"; 
import "./dice.css" ; 


class RollingDie extends React.Component{

    constructor(){
        super();
        this.state= {
            die1: "one", 
            die2: "one" ,
            rolling: false ,
        }; 
        this.number =  ["one" , "two", "three" , "four", "five", "six" ] ;  
        this.onclick= this.onclick.bind(this); 
    }

    onclick(e){
        e.preventDefault();
        const die1 = this.number[Math.floor(Math.random()*this.number.length)] ; 
        const die2 = this.number[Math.floor(Math.random()*this.number.length)] ; 
        
        this.setState({
            die1, 
            die2, 
            rolling: true , 
        })

        setTimeout(()=> {
            this.setState({
                rolling: false , 
            }) 
        }, 1000);
    }

    render(){
        return (
        <React.Fragment>
            <div className="container " >
                <div className="secondary-con p-2 mt-2" >
                    <div className="dice-container" >
                        <Dice num={this.state.die1} rolling={this.state.rolling} />
                        <Dice num={this.state.die2} rolling={this.state.rolling} />
                    </div>
                    
                    <button className="btn btn-dark btn-lg mt-2" onClick={this.onclick} disabled={this.state.rolling}>ROLL</button>
                </div>
            </div> 
        </React.Fragment>
        )
    }
}


export default RollingDie ; 