import React, { Component } from 'react';
class Admin extends Component {
    state = { 
        // {restaurant:'beto', address : 'medellin'}
        // {restaurant:'beto', address : 'medellin'}
        // {restaurant:'beto', address : 'medellin'}

     } 
    render() { 
        return (
            <div className="col-sm-12 col-md-6 col-lg-6 container mt-5">
                <h1 style={{"fontSize":"20px"}} className="m-2 mb-4">Hello {this.props.name}!</h1>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Restaurantes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                    </li>
                </ul>
                
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        );
    }
}
 
export default Admin;