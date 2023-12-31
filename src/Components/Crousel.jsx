import React from "react";

const Crousel = () => {
  return (
    <>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-caption" style={{zIndex : '10'}}>
              <form className="d-flex">
                <input
                  class="form-control me-2 bg-white"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success text-white" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="carousel-item active"  style={{ "maxHeight": "500px" }}>
              <img
                style={{ "maxHeight": "500px" }}
                src="https://source.unsplash.com/random/300x300/?burger"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item"  style={{ "maxHeight": "500px" }}>
              <img
               style={{ "maxHeight": "500px" }}
                src="https://source.unsplash.com/random/300x300/?pizza"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item"  style={{ "maxHeight": "500px" }}>
              <img
               style={{ "maxHeight": "500px" }}
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
      </div>
    </>
  );
};

export default Crousel;
