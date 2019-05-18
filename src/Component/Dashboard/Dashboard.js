import React, {Component} from 'react';
import Product from './../Product/Product'
import axios from 'axios';

class Dashboard extends Component {

delete(id){
    axios.delete('/api/product:id', id).then(results => {
        this.props.getRequest(results)
    })
}
    render(){
        return(
            <div>{this.props.inventory.map((e) => {return <Product key={e} item={e} />})}</div>
        )
    }
}   

export default Dashboard