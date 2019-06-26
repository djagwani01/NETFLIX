import React from 'react'
import './recommendations.css'

const Recommendations = (props) => {
	return(
		<div>
		<h2 className="recommListTitle">Recommendations</h2>
			<div className="recommendations">

				<table>
				<tbody>
					<tr>
						{props.recommList.map((element,index)=>{
							return(
									<td>
										<img
										src={element.img} 
										alt={element.title}
										onMouseOver={props.onHandleMouseOverRecommList.bind(this, index)}
										/>
									</td>
								   )
						})}
					</tr>
					<tr>
						{props.recommList.map(element=>{
							return(
									<td>
										<p>{element.title}</p>
									</td>
								   )
						})}
					</tr>
					<tr>
						{props.hoveredRecommList.map((element, index)=>{
							if(element===null){
								return(
									<td></td>
								   )
							}
							else if(element!==null){
								return(
									<td>
										<button id={element.id} onClick={props.onHandleClickRecommList.bind(this, element)}>Add</button>
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


export default Recommendations