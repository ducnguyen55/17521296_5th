import React, {Component} from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

class Menu extends Component {
	render(){
		return (
				<div className="Menu">
					<div className="container">
						<Link to='/'><img src={`https://i.ibb.co/D8YLbLp/logo.jpg`} alt='logo' className='mx-auto d-block img-fluid' id='logo'/></Link>
						<nav class="navbar navbar-expand-lg navbar-light">
							<a class="navbar-brand" href="#"></a>
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						    <span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse" id="navbarNav">
						    	<ul class="navbar-nav">
									<li className="nav-item">
									<Link to='/Dress' className="nav-link" >Đầm</Link>
									</li>
							    	<li className="nav-item">
										<Link to='/Vest' className="nav-link" >vest</Link>
									</li>
									<li className="nav-item">
										<Link to='/Shirt' className="nav-link" >Sơ mi</Link>
									</li>
									<li className="nav-item">
										<Link to='/Juyp' className="nav-link" >Juyp</Link>
									</li>
									<li className="nav-item">
										<Link to='/TShirt' className="nav-link" >Áo Phông</Link>
									</li>
									<li className="nav-item">
										<Link to='/Set' className="nav-link" >Set bộ</Link>
									</li>
						    	</ul>
						  	</div>
						</nav>
					</div>
				</div>
		);
	}
}

export default Menu;