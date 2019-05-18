import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component{
    constructor(props){
        super(props)

        this.state={
            name: '',
            img: '',
            price: ''
        }
        this.handleCancel=this.handleCancel.bind(this);
        this.create=this.create.bind(this);
    }
    create(){
        let {name, img, price}=this.state;
        if(name){
            let product = {
                name,
                img,
                price: this.state.price
            }
            axios.post('/api/product').then(results => {
                this.props.get();
                this.handleCancel();
            })
            .catch(err => console.log(`${err} is bustin up this program`))
            }
            else{
                console.log(`${name} is not valid`)
        }
    }
    
    handleInput_Name(val){
        this.setState({
            name: val
        })
    }

    handleInput_Price(val){
        this.setState({
            price: val
        })
    }

    handleInput_Img(val){
        this.setState({
            img: val
        })
    }

    handleCancel(){
        this.setState({
            name: '',
            img: '',
            price: ''
        })
    }

    render(){
        return(
            <div className="form">
                <div className="inputs">
                    <div className="img_preview"/>
                    <p>Image URL:</p>
                    <input className="IMG" value={this.state.img} onChange={e => this.handleInput_Img(e.target.value)} type="text"></input>
                    <p>Product Name:</p>
                    <input className="Product-Name" value={this.state.name} onChange={e => this.handleInput_Name(e.target.value)} type="text"></input>
                    <p>Price:</p>
                    <input className="Price" value={this.state.price} onChange={e => this.handleInput_Price(e.target.value)} type="text"></input>
                </div>
                    <div className="form_button_box">
                        <button className="Cancel">Cancel</button>
                        <button className="Add-Inventory">Add to Inventory</button>
                    </div>
            </div>        
        )
    }
}

export default Form