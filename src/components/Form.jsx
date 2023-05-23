import React, { Component } from 'react'

export default class Form extends Component {
   
    state = {
        Email: "",
        Password: "",
        Date: "",
        Address: "",
        Gender: "",
        Catagory: "",
        Checkbox: true,

    }

    FormValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    ChackValue = (event) => {
        this.setState({
            Checkbox: event.target.checked
        });
    };
    
    // ChackValue = (event) => {
    //     // console.log(event.target.value)
    //     this.setState({
    //         checkbox: event.target.checked
    //     })
    // }
    render() {
        const { Email, Password, Date, Address, Catagory, Checkbox } = this.state
        return (
            <>
                <div class="container">
                    <form>
                        <div class="mb-3">
                            <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="Email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.FormValue} value={Email} />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" name="Password" onChange={this.FormValue} value={Password} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" class="form-label">Date</label>
                            <input type="date" class="form-control" name="Date"  onChange={this.FormValue} value={Date} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" class="form-label">Address</label>
                            <textarea name="Address" id="" class="form-control" onChange={this.FormValue} value={Address}></textarea>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" class="form-label">Gender :</label>
                            Male <input type="radio" value="male" name="Gender" onChange={this.FormValue} />
                            Female <input type="radio" value="female" name="Gender" onChange={this.FormValue} />
                        </div>
                        <label htmlFor="exampleInputPassword1" class="form-label">Catagory :</label>
                        <select class="form-control" name="Catagory" aria-label="Default select example" onChange={this.FormValue} value={Catagory}>
                            <option>select </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div class="mb-3 form-check">
                            <input type="checkbox" name="Checkbox" class="form-check-input" id="exampleCheck1" checked={Checkbox} onChange={this.ChackValue} />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={() => console.log(this.state)}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}
