import React, { Component } from 'react';
class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div className="col-sm-12 col-md-4 col-lg-4 container">
            <form className="form-control mt-5">
                <h1 align="center">Login</h1>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button style={{'margin-left': '20%', 'width': '60%'}} type="submit" className="btn btn-primary">Submit</button>
                <p onClick={this.props.formMode} className="mt-5 form-text text-center"><u>don't have an account? Sign up.</u></p>
            </form>
            {console.log(this.props.formMode)}
            </div>
        );
    }
}
 
export default Login;