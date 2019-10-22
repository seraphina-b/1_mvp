import React from 'react'

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: null,
            userPassword: null
        }
    }

    // handleChange = () => {
        
    // }
    
    render() {
        return <div className="card">
            <label>Email</label>
            <input></input>
            <label>Password</label>
            <input></input>
            <button className="btn btn-primary"></button>
        </div>
    
}
}

export default LogIn;

