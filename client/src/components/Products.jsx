import React, { Component } from "react";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let displayBotton = "";
    if (this.props.availability === "private") {
      displayBotton = (
        <button className="btn btn-primary" onClick={editProduct}>
          Edit
        </button>
      );
    } else {
      displayBotton = <span>can't edit</span>;
    }
    return (
      <tr>
        <td>{this.props.product}</td>
        <td>{this.props.availability}</td>
        <td>{displayBotton}</td>
      </tr>
    );
  }
}
function editProduct() {
  alert("edit");
}
export default Product;
