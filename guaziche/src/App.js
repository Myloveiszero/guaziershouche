import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home/Home'
import SellCars from './components/sellingCars/SellCars'
import BuyCars from './components/buyCars/BuyCars'
import Message from './components/message/Message'
import Mine from './components/mine/Mine'
import Detail from './components/detailInfo/index'


function App() {
  return (
    <Router>
      <Route path='/' exact component={Home}/>
      <Route path='/sell/'  component={SellCars}/>
      <Route exact path='/buy/'  component={BuyCars}/>
      <Route path='/message/'  component={Message}/>
      <Route path='/mine/'  component={Mine}/>
      <Route exact path='/buy/detail/'  component={Detail}/>
    </Router>
  );
}

export default App;
