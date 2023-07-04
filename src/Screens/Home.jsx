import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Fotter from "./Fotter";
import Body from "../Components/Body";
// import Crousel from "../Components/Crousel";

const Home = () => {
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);
  const [search,setsearch] =useState([])
  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: "pOST",
      Headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setfooditem(response[0]);
    setfoodcat(response[1]);
    // console.log(response[0],response[1])
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center ">
                <input
                  class="form-control me-2 bg-white text-danger"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>{setsearch(e.target.value)}}
                />
                {/* <button
                  className="btn btn-outline-success text-white"
                  type="submit"
                >
                  Search
                </button> */}
              </div>
            </div>
            <div
              className="carousel-item active"
              style={{ maxHeight: "500px" }}
            >
              <img
                style={{ maxHeight: "500px" }}
                src="https://source.unsplash.com/random/300x300/?burger"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" style={{ maxHeight: "500px" }}>
              <img
                style={{ maxHeight: "500px" }}
                src="https://source.unsplash.com/random/300x300/?pizza"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" style={{ maxHeight: "500px" }}>
              <img
                style={{ maxHeight: "500px" }}
                src="https://source.unsplash.com/random/300x300/?chicken"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container">
          {foodcat !== [] ? (
            foodcat.map((data) => {
              return (
                <div className="row m0-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {fooditem !== [] ? (
                    fooditem
                      .filter((item) => (item.CategoryName === data.CategoryName)  && (item.name.toLowerCase().includes(search)))
                      .map((filteritems) => {
                        return (
                          <div
                            key={filteritems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Body
                              fooditem={filteritems}
                              options={filteritems.options[0]}
                            ></Body>
                          </div>
                        );
                      })
                  ) : (
                    <div>no such data found</div>
                  )}
                </div>
              );
            })
          ) : (
            <div>nahi chala</div>
          )}
        </div>
        <div>
          <Fotter />
        </div>
      </div>
    </>
  );
};

export default Home;
