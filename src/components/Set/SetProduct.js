import React, {Component} from 'react';
import ListProduct from '../../Product/ListProduct';
import '../../Product/Product.css'

class SetProduct extends Component {
	constructor(){
		super();
		this.state={
			product:[]
		};
	}

	async componentDidMount() {
		await fetch(`https://my-json-server.typicode.com/nguyenthanhduc/api_5th/product?type=set`)
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
				<h2 className="Title">SET BỘ</h2>
				<ListProduct product={product}/>
			</div>
			);
		}
	}
}

export default SetProduct;