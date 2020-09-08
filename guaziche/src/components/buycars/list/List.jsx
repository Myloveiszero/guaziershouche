import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';

function List() {

    return (
        <div className="list-wrapper">  
            <Link to="/detail" className="list-content">
                <div className="img-wrapper">
                    <img src="https://image1.guazistatic.com/qn20090714564356d69538790f886a2f12d3a6bcf4ea15.jpg?imageView2/1/w/240/h/160/q/99"></img>
                </div>
                <div className="info-wrapper">
                    <div id="car-name">
                        <span id="car-name--title">起亚 KX5 2016款 1.6T 自动两驱 Premium</span>
                    </div>
                    <div className="car-time">
                    <div className="car-time--left">
                        <div className="car-info">2017年/</div>
                        <div className="preferential">8.2万公里</div>
                    </div>
                        <div id="tuihuan">7天可退</div>
                    </div>
                    <div className="car-price">
                    <div className="price-left">
                        <div className="price-num">7.68
                        <span>万</span>
                        </div>
                        <div className="discount">首付0.79万</div>
                    </div>            
                        <span className="iconfont icon-gouwuchejia"></span>
                    </div>
                </div>
            </Link>    
            <Link to="/detail" className="list-content">
                <div className="img-wrapper">
                    <img src="https://image.guazistatic.com/gz01190506/15/50/25f80b2b06fe7b99c568e8d06027d41c.jpg@base@tag=imgScale&w=240&h=160&c=1&m=2&q=99"></img>
                </div>
                <div className="info-wrapper">
                    <div id="car-name">
                        <span id="car-name--title">纳智捷 优6 SUV 2017款 改款 1.6T 新创型</span>
                    </div>
                    <div className="car-time">
                    <div className="car-time--left">
                        <div className="car-info">2017年/</div>
                        <div className="preferential">8.94万公里</div>
                    </div>
                        <div id="tuihuan">7天可退</div>
                    </div>
                    <div className="car-price">
                    <div className="price-left">
                        <div className="price-num">8.04
                        <span>万</span>
                        </div>
                        <div className="discount">首付0.8万</div>
                    </div>            
                        <span className="iconfont icon-gouwuchejia"></span>
                    </div>
                </div>
            </Link>            
            <Link to="/detail" className="list-content">
                <div className="img-wrapper">
                    <img src="https://image1.guazistatic.com/qn200903154529077e5fd3eec1844b207e101531c97357.jpg?imageView2/1/w/240/h/160/q/99"></img>
                </div>
                <div className="info-wrapper">
                    <div id="car-name">
                        <span id="car-name--title">福特 翼搏 2013款 1.5L 自动风尚型</span>
                    </div>
                    <div className="car-time">
                    <div className="car-time--left">
                        <div className="car-info">2016年/</div>
                        <div className="preferential">8.6万公里</div>
                    </div>
                        <div id="tuihuan">7天可退</div>
                    </div>
                    <div className="car-price">
                    <div className="price-left">
                        <div className="price-num">5.23
                        <span>万</span>
                        </div>
                        <div className="discount">首付0.52万</div>
                    </div>            
                        <span className="iconfont icon-gouwuchejia"></span>
                    </div>
                </div>
            </Link>            
            <Link to="/detail" className="list-content">
                <div className="img-wrapper">
                    <img src="https://image1.guazistatic.com/qn2009030915043af10b449d1d973ed3b5ca0370658a88.jpg?imageView2/1/w/240/h/160/q/99"></img>
                </div>
                <div className="info-wrapper">
                    <div id="car-name">
                        <span id="car-name--title">雪佛兰 科鲁兹 2012款 1.6L SE AT</span>
                    </div>
                    <div className="car-time">
                    <div className="car-time--left">
                        <div className="car-info">2017年/</div>
                        <div className="preferential">6.2万公里</div>
                    </div>
                        <div id="tuihuan">7天可退</div>
                    </div>
                    <div className="car-price">
                    <div className="price-left">
                        <div className="price-num">4.05
                        <span>万</span>
                        </div>
                        <div className="discount">首付0.41万</div>
                    </div>            
                        <span className="iconfont icon-gouwuchejia"></span>
                    </div>
                </div>
            </Link>            
            <Link to="/detail" className="list-content">
                <div className="img-wrapper">
                    <img src="https://image1.guazistatic.com/qn200908112553256d18c99a3c2059b814c82d16d4bff8.jpg?imageView2/1/w/240/h/160/q/99"></img>
                </div>
                <div className="info-wrapper">
                    <div id="car-name">
                        <span id="car-name--title">江淮 瑞风S3 2017款 1.5L 手动豪华型</span>
                    </div>
                    <div className="car-time">
                    <div className="car-time--left">
                        <div className="car-info">2017年/</div>
                        <div className="preferential">4.2万公里</div>
                    </div>
                        <div id="tuihuan">7天可退</div>
                    </div>
                    <div className="car-price">
                    <div className="price-left">
                        <div className="price-num">4.00
                        <span>万</span>
                        </div>
                        <div className="discount">首付0.4万</div>
                    </div>            
                        <span className="iconfont icon-gouwuchejia"></span>
                    </div>
                </div>
            </Link>                    
      </div>
    )
}

export default List;