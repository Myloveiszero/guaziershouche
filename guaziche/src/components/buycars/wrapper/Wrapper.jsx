import React from 'react';
import Header from '../header/Header';
import Filter from '../filter/Filter';
import List from '../list/List';
import './Wrapper.css';




function Wrapper() {

    console.log(22222222)
    return (
        <div className="buycars-wrapper">
            <div className="top-wrapper">        
                    <Header />
                <Filter />
            </div>
            <List />
        </div>
    )



}
export default Wrapper;
// export default connect(function mapStateToProps(state) {
//     //状态的读操作
//     return state;
//   },function mapDispatchToProps(dispatch) {
//     return {
//       dispatch
//     }
//   })(Wrapper);