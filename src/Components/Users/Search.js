import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, showclear, setAlert }) => {
  const [text, setText] = useState("");
  const onsubmit = e => {
    e.preventDefault();
    searchUsers(text);
    if (text === "") {
      setAlert("Please enter sometinhg", "light");
    }

    setText("");
  };
  const onclick = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onsubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Search..'
          onChange={onclick}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showclear && (
        <button
          type='clear'
          value='Clear'
          className='btn btn-light btn-block'
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showclear: PropTypes.bool.isRequired
};

export default Search;
