import React from 'react'
import './my_list.css'

const MyList = (props) => {
	return(
		<div>
		<h2 className="myListTitle">My List</h2>
			<div className="myList">

				<table>
				<tbody>
					<tr>
						{props.myList.map((element,index)=>{
							return(
									<td>
										<img 
										src={element.img} 
										alt={element.title}
										onMouseOver={props.onHandleMouseOverMyList.bind(this, index)}
										 />
									</td>
								   )
						})}
					</tr>
					<tr>
						{props.myList.map(element=>{
							return(
									<td>
										<p>{element.title}</p>
									</td>
								   )
						})}
					</tr>
					<tr>
						{props.hoveredMyList.map((element, index)=>{
							if(element===null){
								return(
									<td></td>
								   )
							}
							else if(element!==null){
								return(
									<td>
										<button id={element.id} onClick={props.onHandleClickMyList.bind(this, index)}>Remove</button>
									</td>
								   )
							}
						
						})}
					</tr>
					
				</tbody>
				</table>
			</div>
			</div>
		)
	
}


export default MyList

