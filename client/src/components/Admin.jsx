import React, { Component } from "react";
import Product from "./Products";
class Admin extends Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      products: { productName: "Burger" },
    };
  }
  render() {
    function getProduct(promise) {
      fetch(`restaurants/getproducts?restaurantId=${this.state.products.name}`)
        .then((res) => {
          console.log("response");
        })
        .catch((err) => console.log("Error:", err));
    }
    return (
      <div className="col-sm-12 col-md-6 col-lg-6 container mt-5">
        <h1 style={{ fontSize: "20px" }} className="m-2 mb-4">
          Hello {this.props.name}!
        </h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href={this.state.hre}
            >
              Collection
            </a>
          </li>
        </ul>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Availability</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            <Product product="Burguer" availability="private"></Product>
            <Product product="Hot dog" availability="public"></Product>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Admin;
