import React from "react";
import PropTypes from "prop-types";

const Repoitem = ({ repo }) => {
  return (
    <div className='card'>
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
};
Repoitem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default Repoitem;
