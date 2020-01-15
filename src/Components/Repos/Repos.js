import React from "react";
import PropTypes from "prop-types";
import Repoitem from "./Repoitem";

const Repos = ({ repos }) => {
  return repos.map(repo => <Repoitem key={repo.id} repo={repo} />);
};

Repos.PropTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
