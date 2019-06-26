import React from 'react'
import './navbar.css'

const Navbar = (props) => {
	return(
			<div className="title">
				<h1>{props.title}</h1>
			</div>
		)
}

export default Navbar