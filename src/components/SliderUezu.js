import React, { Component } from 'react';
//import React from "react";
//import ReactDOM from "react-dom";
import Slider from "react-slick";

class SliderUezu extends Component {
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
                        slidesToScroll: 1
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
            autoplaySpeed: 4000,
            cssEase: "linear",
            arrows: 1,
            mobileFirst: true,
        };
        return (
            <div className="container mb-5">
                <Slider {...settings}>
                    <div>
                        <img src="/master_images/uezu/uezu01_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/uezu/uezu02_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/uezu/uezu03_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/uezu/uezu04_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/uezu/uezu05_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/uezu/uezu06_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/uezu/uezu07_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/uezu/uezu08_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/uezu/uezu09_250.jpg" />
                    </div>
                    <div>
                        <img src="/master_images/uezu/uezu10_250.jpg" />
                    </div>
                </Slider>
            </div>
        );
    }
}

//ReactDOM.render(<reactSlider />, document.getElementById("container-slider"));
//export default connect(mapStateToProps, mapDispatchToProps)(reactSlider);
export default SliderUezu;
