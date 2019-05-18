import React, {Component} from 'react';
import axios from 'axios';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Header from './Component/Header/Header';
import Product from './Component/Product/Product';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventoryList: []
    }
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount(){
    this.getInventory();
  }

  getInventory(){
    axios.get('/api/inventory').then(results => {
      this.setState({
        inventoryList: results.data
      })
    })
  }
  
  render() {
    return (
      <div className="App">
       <Header/> 
       <Form getRequest={this.getInventory}/>
       <Dashboard inventory={this.state.inventoryList} getRequest={this.getInventory}/>
       <Product/>
      </div>
    );
  }

 
}

export default App;
