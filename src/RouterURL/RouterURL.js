import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';

import Homepage from '../components/Homepage/Homepage';
import Dress from '../components/Dress/Dress';
import Shirt from '../components/Shirt/Shirt';
import Vest from '../components/Vest/Vest';
import Juyp from '../components/Juyp/Juyp';
import TShirt from '../components/TShirt/TShirt';
import Set from '../components/Set/Set';

class RouterURL extends Component {
	render() {
		return (
				<div>
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route path="/Dress" component={Dress} />
						<Route path="/Shirt" component={Shirt} />
						<Route path="/TShirt" component={TShirt} />
						<Route path="/Vest" component={Vest} />
						<Route path="/Juyp" component={Juyp} />
						<Route path="/Set" component={Set} />
						<Route component={Homepage} />
					</Switch>
				</div>
			);
	}
}

export default RouterURL;