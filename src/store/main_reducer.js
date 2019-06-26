const initialState = {
	recommList : [
								{
									title: 'Family Guy',
									id: 4,
									img: 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
								},

								{
									title: 'The Croods',
									id: 5,
									img: 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
								},

								{
									title: 'Friends',
									id: 6,
									img: 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
								}
						  ],
		myList: [
				{
					title: 'Futurama',
					id: 1,
					img: 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
				},

				{
					title: 'The Interview',
					id: 2,
					img: 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
				},

				{
					title: 'Gilmore Girls',
					id: 3,
					img: 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
				}
			],
			hoveredMyList: [],
			hoveredRecommList: []
}

const mainReducer = (state=initialState, action) => {
	switch(action.type){
		case 'onMyListImgHover':
			return{
				...state,
				hoveredMyList: state.myList.map((el,index)=>{
					if(index===action.val){
						return el
					}
					else{
						return null
					}
				})
			}

		case 'onRecommListImgHover':
			return{
				...state,
				hoveredRecommList: state.recommList.map((el, index)=>{
					if(index===action.val){
						return el
					}
					else{
						return null
					}
				})
			}

		case 'removeItem':
			return{
				...state,
				myList: state.myList.filter((el, index)=>{
					return (index!==action.val)
				}),
				hoveredMyList: []
			}

		case 'addItem':
		console.log(action.val)
		let myList = [...state.myList]

		if(myList.includes(action.val)===false){
			myList.push(action.val)
		}
			return{
				...state,
				myList
			}

		default:
			return state
	}

}

export default mainReducer