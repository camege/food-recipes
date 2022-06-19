import React from "react";
import { Link, useParams } from "react-router-dom";


class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/restaurants/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ restaurants: response }))
      .catch(() => navigation.navigate("/"));
  }
  render() {
    const { restaurants } = this.state;
    const allRestaurants = restaurants.map((restaurant, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={restaurant.image}
            className="card-img-top"
            alt={`${restaurant.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{restaurant.name}</h5>
            <Link to={`/restaurant/${restaurant.id}`} className="btn custom-button">
              View Review
            </Link>
          </div>
        </div>
      </div>
    ));
    const noRestaurant = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No restaurant reviews yet. Why not <Link to="/new_restaurant">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Reviews for all</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular reviews, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to read.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/restaurant" className="btn custom-button">
                Create New Restaurant Review
              </Link>
            </div>
            <div className="row">
              {restaurants.length > 0 ? allRestaurants : noRestaurant}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}


export default (props) => (
  <Restaurants
      {...props}
      params={useParams()}
  />
);