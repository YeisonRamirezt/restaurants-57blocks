import Product from "./Products";

function Admin(props) {

    /* 
    function getProduct(promise) {
      fetch(`restaurants/getproducts?restaurantId=${state.products.name}`)
        .then((res) => {
          console.log("response");
        })
        .catch((err) => console.log("Error:", err));
    }*/
    return (
      <div className="col-sm-12 col-md-6 col-lg-6 container mt-5">
        <h1 style={{ fontSize: "20px" }} className="m-2 mb-4">
          Hello {props.name}!
        </h1>
        <ul className="nav nav-tabs">
          <li  className="nav-item" onClick={() => props.changeIntf('login')}>
           
              Logout
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

export default Admin;
