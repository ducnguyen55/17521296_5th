import React, {Component} from 'react';
import ListProduct from '../../Product/ListProduct';
import './NewProduct.css';

class NewProduct extends Component {
	constructor(){
		super();
		this.state={
			product:[]
		};
	}

	async componentDidMount() {
		await fetch(`https://my-json-server.typicode.com/nguyenthanhduc/api_5th/product?discount=false`)
		.then(response => response.json())
		.then(data => this.setState({product:data}));
	}

	render(){
		const {product} = this.state;
		if(!product.length){
			return <h1>Loading</h1>
		}
		else{
		return (
			<div className="container">
				<h2 className="Title">sản phẩm mới</h2>
				<ListProduct product={product}/>
			</div>
			);
		}
	}
}

export default NewProduct;