import React, { Component } from 'react';
//import React from "react";
//import ReactDOM from "react-dom";
import Slider from "react-slick";

class SliderShimabuku extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ],
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            cssEase: "linear",
            arrows: 1,
            mobileFirst: true,
        };
        return (
            <div className="container mb-5">
                <Slider {...settings}>
                    <div>
                        <img src="/master_images/shimabuku/shimabuku01_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/shimabuku/shimabuku02_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/shimabuku/shimabuku03_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/shimabuku/shimabuku04_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/shimabuku/shimabuku05_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/shimabuku/shimabuku06_250.jpg" />
                    </div>
                </Slider>
            </div>
        );
    }
}

//ReactDOM.render(<reactSlider />, document.getElementById("container-slider"));
//export default connect(mapStateToProps, mapDispatchToProps)(reactSlider);
export default SliderShimabuku;
