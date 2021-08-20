import React from 'react';

class Cub extends React.Component{

    constructor(){
        super();
        this.state = {
            number: 0 , 
        }
        this.CubClick = this.CubClick.bind(this);
    }

    CubClick(){

        var arr = [1 , 2 , 3 , 4 , 5 , 6 ]; 
        var number =  Math.floor(Math.random()*arr.length); 
        var randomNum = arr[number] ; 
        console.log(randomNum);
        var result = this.setState({
                    number :  randomNum ,
                });
        return result ;
    }

    render(){
        return(
        <React.Fragment>
            <div>{this.state.number}</div>
            <button onClick={this.CubClick} >Click</button>
        </React.Fragment>
        )
    }
}


export default Cub ; 