import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MyList from './lists/my_list'
import Recommendations from './lists/recommendations'
import Navbar from './navbar/navbar'
import { connect } from 'react-redux'


const App = (props) => {
  return (
    <div className="App">
      <Navbar title="NETFLIX" />
        <MyList 
        myList={props.myList}
        onHandleMouseOverMyList={props.onHandleMouseOverMyList}
        hoveredMyList= {props.hoveredMyList}
        onHandleClickMyList={props.onHandleClickMyList}
       />
       <Recommendations 
       recommList={props.recommList}
       onHandleMouseOverRecommList={props.onHandleMouseOverRecommList}
       hoveredRecommList={props.hoveredRecommList}
       onHandleClickRecommList={props.onHandleClickRecommList}
        />
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    myList: state.myList,
    hoveredMyList: state.hoveredMyList,
    recommList: state.recommList,
    hoveredRecommList: state.hoveredRecommList
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onHandleMouseOverMyList: (id) => {dispatch({type: 'onMyListImgHover', val: id})},
    onHandleMouseOverRecommList: (id) => {dispatch({type: 'onRecommListImgHover', val: id})},
    onHandleClickMyList: (id) => {dispatch({type: 'removeItem', val:id})},
    onHandleClickRecommList: (elem) => {dispatch({type: 'addItem', val:elem})}
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
