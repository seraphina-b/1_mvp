import React, { Component } from 'react';

class Categories extends Component {
  state = {}

  render() {
    return (
      <div className='row searcher'>
        <div className='col-sm-12 col-md-8 '>
          <form>
            <h2>Find News by Category</h2>

            <div className="input-group mb-3">
              <select className="custom-select" id="inputGroupSelect02">
                <option value="business" selected>General</option>
                <option value="entertainment">Entertainment</option>
                <option value="science">Science</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
                <option value="sports">Sports</option>
                <option value="business">Business</option>
              </select>

            </div>
          </form>
        </div>
      </div >
    )
  }
}

export default Categories;

