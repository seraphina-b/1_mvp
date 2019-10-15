import React, { Component } from 'react'

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleInputChange(event) { //I catch the value of the input directly
    this.props.updateSearch(event.target.value) //PROPS!
  }


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand font-weight-bold" href="#"><i class="far fa-newspaper"></i> {this.props.title}</a>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="../App.js">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Countries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2"
              //I don't need 'name' attribute bc I only have one input to catch the value
              type="text"
              placeholder="Search"
              onChange={e => this.handleInputChange(e)} />
            <button className="btn btn-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar;


