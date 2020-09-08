import React, { useEffect } from 'react'
import './XuanGouZhiNan.css'
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom'

function XuanGouZhiNan() {

    useEffect(() => {
        new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: "bullets",
                clickable: true,
            },
        });
    }, [])

    return (
        <div className="xuangouzhinan">
            <div className="xuangouzhinan-header">
                <div className="xuangouzhinan-left--box">
                    <span className="xuangouzhinan-left--text1">纳智捷优6</span>
                    <span className="xuangouzhinan-left--text2">SUV</span>
                    <span className="xuangouzhinan-left--text3">选购指南</span>
                </div>
                <span className="xuangouzhinan-right--text">每日更新</span>
            </div>
            <div className="xuangouzhinan-content">
                {/* <!-- Slider main container --> */}
                <div className="swiper-container ">
                    {/* <!-- Additional required wrapper --> */}
                    <div className="swiper-wrapper carCard">
                        {/* <!-- Slides --> */}
                        <div className="swiper-slide carCard-slide">
                            <div className="xuangouzhinan-li">
                                <Link to="/detail">
                                    <div className="xuangouzhinan-img--wrap">
                                        <img className="xuangouzhinan-img" src="https://image1.guazistatic.com/qn200722125101cb53877d9c5eb4f218596936f70b39b2.jpg?imageView2/1/w/240/h/160/q/99" alt="" />
                                    </div>
                                    <span className="focus-text">5人在关注</span>
                                    <div className="focus-content">
                                        <span className="focus-title">现代途胜</span>
                                        <div className="carCard-carname">2015款 1.6T 双离合两驱智能型</div>
                                        <div className="carCard-carprice">9.46万</div>
                                        <span className="carCard-findSameCar">找相似</span>
                                        <span className="carCard-todayRecommend">今日主推</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="xuangouzhinan-li">
                                <Link to="/detail">
                                    <div className="xuangouzhinan-img--wrap">
                                        <img className="xuangouzhinan-img" src="https://image1.guazistatic.com/qn200722125101cb53877d9c5eb4f218596936f70b39b2.jpg?imageView2/1/w/240/h/160/q/99" alt="" />
                                    </div>
                                    <span className="focus-text">5人在关注</span>
                                    <div className="focus-content">
                                        <span className="focus-title">现代途胜</span>
                                        <div className="carCard-carname">2015款 1.6T 双离合两驱智能型</div>
                                        <div className="carCard-carprice">9.46万</div>
                                        <span className="carCard-findSameCar">找相似</span>
                                        <span className="carCard-todayRecommend">今日主推</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default XuanGouZhiNan;