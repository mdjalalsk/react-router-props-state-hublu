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
            Profession: "Student",

        }}
        render() {
            return (
                <div>
                    <h1>I am a Problem </h1>
                    <h2>{"My name is " + (this.state.name) + ", My age is " + (this.state.age) + " & My  profession is " + (this.state.Profession) + "."}</h2>
                </div>
            )
        }
    }
export default Problem