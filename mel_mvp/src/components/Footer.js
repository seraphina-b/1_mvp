import React, { Component } from 'react'

class Footer extends Component {

  render() {
    return (
      <footer className='footer-container'>
        <div className='row'>
          <div className='col footer-text align-self-center'>
            <h6 className='m3 mt-4'><a href="https://newsapi.org/" target="_blank" className="font-weight-bold footer-link">News API</a></h6>
            <h6 className='m3 mt-2'>Created at <a href="https://codeop.tech/" target="_blank" className="font-weight-bold footer-link">CodeOp</a></h6>
            <h6 className='m3 mt-2'><a href="https://www.linkedin.com/in/melaniedeleonlima/" target="_blank" className="font-weight-bold footer-link">M. De León</a> - Copyright &copy; 2019, All Rights Reserved</h6>
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer;
