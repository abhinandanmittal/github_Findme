import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };
  onsubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    if (this.state.text === "") {
      this.props.setAlert("Please enter sometinhg", "light");
    }

    this.setState({ text: "" });
  };
  onclick = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onsubmit} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder='Search..'
            onChange={this.onclick}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showclear && (
          <button
            type='clear'
            value='Clear'
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showclear: PropTypes.bool.isRequired
};

export default Search;
