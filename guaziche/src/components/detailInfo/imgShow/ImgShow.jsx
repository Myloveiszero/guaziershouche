import React, {useEffect} from 'react';
import './ImgShow.css'
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

function ImgShow() {
    useEffect(() => {
        new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: false,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: "bullets",
                clickable: true,
            },
        });
        new Swiper('.swiper-nav-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            // If we need pagination
            pagination: {
                el: '.nav-swiper-pagination',
                type: "bullets",
                clickable: true,
            },
        })
    }, [])

    return (
        <div className="img-show">
            {/* <!-- Slider main container --> */}
            <div className="swiper-container">
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper">
                    {/* <!-- Slides --> */}
                    <div className="swiper-slide">
                        <img src="https://image1.guazistatic.com/qn200908162046fa0dc8d3ece5b10e52a6afc1efbeb6d9.jpg?imageView2/1/w/750/h/500/q/88" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://image1.guazistatic.com/qn200908163850cc9bcc40231ac22862642895d9604702.jpg?imageView2/1/w/750/h/500/q/88" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://image1.guazistatic.com/qn200908163850b2e2e83f975f956b279184d53a68d1ea.jpg?imageView2/1/w/750/h/500/q/88" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://image1.guazistatic.com/qn200908163851a52bb06da06984de7967014679258bd4.jpg?imageView2/1/w/750/h/500/q/88" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://image1.guazistatic.com/qn200908162046e7b6f49a49c9bdee732768cef3bfb94e.jpg?imageView2/1/w/750/h/500/q/88" alt="" />
                    </div>
                
                </div>
                {/* <!-- If we need pagination --> */}
                <div className="swiper-pagination"></div>
            </div>
        <div className="pic-count">
            <div className="pic-num">1/5</div>
        </div>
    </div>
    )
}

export default ImgShow;
