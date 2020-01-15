import React, { Fragment, useEffect } from "react";
import Spinner from "../Layout/Spinner";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Repos from "../Repos/Repos";

const User = ({ user, getUser, getRepo, loading, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getRepo(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      Hireable:{""}
      {hireable ? (
        <i className='fas fa-check text-success'></i>
      ) : (
        <i className='fas fa-times-circle text-danger'></i>
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            alt={login}
            src={avatar_url}
            className='round-img'
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>
            <strong>Location:</strong>
            {location}
          </p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h2>Bio</h2>
              <p>{bio}</p>
              <a href={html_url} className='btn btn-dark'>
                Visit Github Profile
              </a>
              <ul>
                <li>{login && <h5>Username:{login}</h5>}</li>
                <li>{company && <h5>Company:{company}</h5>}</li>
                <li>{blog && <h5>Blog:{blog}</h5>}</li>
              </ul>
            </Fragment>
          )}
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers:{followers}</div>
        <div className='badge badge-dark'>Following:{following}</div>
        <div className='badge badge-light'>Public Repo:{public_repos}</div>
        <div className='badge badge-success'>Public Gists:{public_gists}</div>
      </div>
      <h1>Latest Repository</h1>
      <Repos repos={repos} />
    </Fragment>
  );
};
User.propTypes = {
  getUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

export default User;
