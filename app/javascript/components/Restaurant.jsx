import React from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";

// just to make a change to create a pull request

function getID(){
  const id = useParams();
  return id;
}


class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurant: { address: "" } };
    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }


  componentDidMount() {
    const {id} = this.props.params;
    const url = `/api/v1/show/${id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ restaurant: response }))
      .catch(() => this.props.history.push("/restaurants"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  deleteRecipe() {
    const {id} = this.props.params;
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigation.navigate("/restaurants"))
      .catch(error => console.log(error.message));
  }

  render() {
    const { restaurant } = this.state;
    let addressList = "No address available";

    if (restaurant.address.length > 0) {
      addressList = restaurant.address
        .split(",")
        .map((address, index) => (
          <li key={index} className="list-group-item">
            {address}
          </li>
        ));
    }
    const restaurantReview = this.addHtmlEntities(restaurant.review);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={restaurant.image}
            alt={`${restaurant.name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {restaurant.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Address</h5>
                {addressList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Review</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${restaurantReview}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger" onClick={this.deleteRecipe}>
                Delete Review
              </button>
            </div>
          </div>
          <Link to="/restaurants" className="btn btn-link">
            Back to restaurant reviews
          </Link>
        </div>
      </div>
    );
  }
}


export default (props) => (
  <Restaurant
      {...props}
      params={useParams()}
  />
);