import React, {Component} from 'react'
import {Link} from 'react-router-dom'

//i think this uses bootstrap for navbar
//use links instead of anchor tags because
//of react router
export default class Navbar extends Component {
	render(){
		return(
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<Link to="/" className="navbar-brand">ExcerTracker</Link>
				<div className="collpase navbar-collapse">
					<ul className="navbar-nav mr-auto">

						<li className="navbar-item">
							<Link to="/" className="nav-link">Exercises</Link>

						</li>
						<li className="navbar-item">
							<Link to="/create" className="nav-link">Create Exercises Log</Link>
							
						</li>
						<li className="navbar-item">
							<Link to="/user" className="nav-link">Create User</Link>
							
						</li>
					</ul>

					


				</div>


			</nav>
		)

	}
}