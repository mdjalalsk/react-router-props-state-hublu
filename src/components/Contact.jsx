import React,{ useState } from 'react'
import "./Contact.css"
import Header from './Header'
import Clipboard from './Clipboard'
import Style from './Jalal.module.css'


function Contact(props) {

  const [state, setState] = useState({
    Email: "",
    Password: "",
    Date: "",
    Address: "",
    Gender: "",
    Catagory: "",
    Checkbox: true,
  });
  const FormValue = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };
  const ChackValue = (event) => {
    setState({
      ...state,
      Checkbox: event.target.checked
    });
  };

  const { Email, Password, Date, Address, Catagory, Checkbox } = state;
  return (
    <div class ="container">
      <Header />
      {/* <h1 className='h1c'>This is Contact</h1> */}
      <h1> My Name is {props.name} & My Number is {props.number} </h1>

      <Clipboard />
      
      <h2 style={{ textAlign: 'center', backgroundColor: 'skyblue', color: "green" }}>I am testing style</h2>
      <p className="firstpragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam asperiores debitis hic consequatur ducimus ut dolores iure atque impedit, facilis nemo praesentium. Tenetur accusantium labore eius voluptatem consectetur eveniet aut.</p>
      <button className={Style.btn1} >Subscribe</button><br />
      <button className={Style.btn1}>Read more</button>
      <h1 className={Style.coustomheading}> I love my country </h1>
      <div class="col-md-12 text-center">
        <button className='btn btn-danger '>bootstrap button</button>
      </div>
      <hr />
     
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="Email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={FormValue} value={Email} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="Password" onChange={FormValue} value={Password} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Date</label>
            <input type="date" className="form-control" name="Date" onChange={FormValue} value={Date} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
            <textarea name="Address" id="" className="form-control" onChange={FormValue} value={Address}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Gender :</label>
            Male <input type="radio" value="male" name="Gender" onChange={FormValue} />
            Female <input type="radio" value="female" name="Gender" onChange={FormValue} />
          </div>
          <label htmlFor="exampleInputPassword1" className="form-label">Category :</label>
          <select className="form-control" name="Catagory" aria-label="Default select example" onChange={FormValue} value={Catagory}>
            <option>select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="mb-3 form-check">
            <input type="checkbox" name="Checkbox" className="form-check-input" id="exampleCheck1" checked={Checkbox} onChange={ChackValue} />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => console.log(state)}>Submit</button>
        </form>
      </div>

    </div>

  )
}

export default Contact
