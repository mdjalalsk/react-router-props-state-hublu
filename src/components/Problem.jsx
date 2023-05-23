import React, { Component } from 'react'

class Problem extends Component {
        

   

    // state={
    //     name:"Jalal S K",
    //     age:25,
    //     Profession:"Student",
    // }

    constructor(props) {
        super(props)
        this.state = {
            name: "Jalal S K",
            age: 25,
            Profession:"Student",
            // Profession: {
            //     prof1: "Student",
            //     prof2: "Web Developer",
            //     prof3: "Freelancer",
            // },

        }}
        ChangeValue(result){
            this.setState({
                Profession:"freelancer"
            });
        }
        ChangeResult=this.ChangeValue.bind(this,this.result);

      
        render() {
            return (
                <div>
                    <h1>I am a Problem </h1>
                    <h2>{"My name is " + (this.state.name) + ", My age is " + (this.state.age) + " & My  profession is " + (this.state.Profession) + "."}</h2>
                      <button onClick={this.ChangeResult}>Change value</button>
                </div>
            )
        }
    }
export default Problem