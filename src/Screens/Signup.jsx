import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    geoLocation: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        location: credentials.geoLocation,
      }),
    });
    const json = await response.json();
    console.log(response)
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials");
    }
  };
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onchange}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onchange}
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">geoLocation</label>
            <input
              type="geoLocation"
              className="form-control"
              name="geoLocation"
              value={credentials.geoLocations}
              onChange={onchange}
              placeholder="Enter location"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your location with anyone else.
            </small>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/Login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
