import React, { Component } from 'react'
import Login from './components/login.jsx'
import Registration from './components/registration.jsx'
import AdminArea from './components/admin.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {

  mode = (bool) => {
    if (bool === 1){
      console.log('showRegistration')
      return <Login formMode={this.mode(0)} />
    }else if(bool === 0){
      console.log('showLogin')
      return <Registration/>
    }else{
      return <AdminArea name="Yeison"/>
    }
  }

  state = {  } 
  render() { 
    return (
      <div>
        {this.mode(2)}
      </div>
    );
  }
}

export default App;
