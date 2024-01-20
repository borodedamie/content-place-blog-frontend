import { useState } from "react";
import Work from "../../assets/works.png";
import Starworks from "../../assets/starworks.png";
import PrevBtn from "../../assets/prev3.png";
import NextBtn from "../../assets/next3.png";

function Works() {
    const [slideIndex, setSlideIndex] = useState<number>(1);

    const plusSlides = (n: number) => {
        setSlideIndex((prevIndex) => prevIndex + n);
    };

    const currentSlide = (n: number) => {
        setSlideIndex(n);
    };

    const showSlides = (n: number, className: string) => {
        let i: number;
        let slides = document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>;
        let dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>;

        if (n > slides.length) {
            setSlideIndex(1);
        }
        if (n < 1) {
            setSlideIndex(slides.length);
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace('active', '');
        }

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';
    };


    const handleIndicatorClick = (target: string) => {
        const content = document.querySelector(target);

        if (content) {
            document.querySelectorAll('.indicator li').forEach((i) => {
                i.classList.remove('active');
            });

            document.querySelectorAll('.content li').forEach((i) => {
                i.classList.remove('active');
            });

            content.classList.add('active');

            const targetElement = document.querySelector(`[data-target="${target}"]`);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        }
    };


    return (
        <section
            className="px-5 text-center text-lg-start our-works"
            style={{ backgroundColor: "#FFFF" }}
        >
            <div className="container">
                <h5 className="contact-header">OUR WORKS</h5>
                <div className="tcontainer">
                    <div className="wrapper">
                        <ul className="indicator">
                            <li className="active" data-target="#home" onClick={() => handleIndicatorClick('#home')}>
                                Audio Content Creation
                            </li>
                            <li data-target="#profile">Visual Content Creation</li>
                            <li data-target="#contact1">Web Services</li>
                            <li data-target="#settings">Text Content Creation</li>
                        </ul>
                        <ul className="content">
                            <li className="active" id="home">
                                <div className="slideshow-container">
                                    <div className="mySlides my-fade">
                                        {/* <div class="numbertext">1 / 3</div> */}
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mySlides my-fade">
                                        <div className="numbertext">2 / 3</div>
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mySlides my-fade">
                                        <div className="numbertext">3 / 3</div>
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="arrows">
                                        <a
                                            className="previous"
                                            style={{ color: "blue" }}
                                            onClick={() => plusSlides(-1)}
                                        >
                                            <img src={PrevBtn} alt="" />
                                        </a>
                                        <a
                                            className="next-arr"
                                            style={{ color: "blue" }}
                                            onClick={() => plusSlides(1)}
                                        >
                                            <img src={NextBtn} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <br />
                                <div style={{ textAlign: "center" }}>
                                    <span className="dot" onClick={() => currentSlide(1)}></span>
                                    <span className="dot" onClick={() => currentSlide(2)}></span>
                                    <span className="dot" onClick={() => currentSlide(3)}></span>
                                </div>
                            </li>
                            <li id="profile" style={{ wordWrap: "break-word" }}>
                                <div className="slideshow-container">
                                    <div className="mySlides2 my-fade">
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mySlides2 my-fade">
                                        <div className="numbertext">2 / 3</div>
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p style={{ wordWrap: "break-word" }}>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mySlides2 my-fade">
                                        <div className="numbertext">3 / 3</div>
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="arrows">
                                        <a
                                            className="previous"
                                            style={{ color: "blue" }}
                                            onClick={() => plusSlides(-1)}
                                        >
                                            <img src={PrevBtn} alt="" />
                                        </a>
                                        <a
                                            className="next-arr"
                                            style={{ color: "blue" }}
                                            onClick={() => plusSlides(1)}
                                        >
                                            <img src={NextBtn} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <br />
                                <div style={{ textAlign: "center" }}>
                                    <span className="dot" onClick={() => currentSlide(1)}></span>
                                    <span className="dot" onClick={() => currentSlide(2)}></span>
                                    <span className="dot" onClick={() => currentSlide(3)}></span>
                                </div>
                            </li>
                            <li id="contact1">
                                <div className="slideshow-container">
                                    <div className="mySlides3 my-fade">
                                        {/* <div class="numbertext">1 / 3</div> */}
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mySlides3 my-fade">
                                        <div className="numbertext">2 / 3</div>
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p style={{ wordWrap: "break-word" }}>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mySlides3 my-fade">
                                        <div className="numbertext">3 / 3</div>
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="arrows">
                                        <a
                                            className="previous"
                                            style={{ color: "blue" }}
                                            onClick={() => plusSlides(-1)}
                                        >
                                            <img src={PrevBtn} alt="" />
                                        </a>
                                        <a
                                            className="next-arr"
                                            style={{ color: "blue" }}
                                            onClick={() => plusSlides(1)}
                                        >
                                            <img src={NextBtn} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <br />
                                <div style={{ textAlign: "center" }}>
                                    <span className="dot" onClick={() => currentSlide(1)}></span>
                                    <span className="dot" onClick={() => currentSlide(2)}></span>
                                    <span className="dot" onClick={() => currentSlide(3)}></span>
                                </div>
                            </li>
                            <li id="settings">
                                <div className="slideshow-container">
                                    <div className="mySlides4 my-fade">
                                        {/* <div class="numbertext">1 / 3</div> */}
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mySlides4 my-fade">
                                        <div className="numbertext">2 / 3</div>
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p style={{ wordWrap: "break-word" }}>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mySlides4 my-fade">
                                        <div className="numbertext">3 / 3</div>
                                        <div className="tb-container">
                                            <div>
                                                <div className="grid-container">
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Work} alt="" />
                                                        <p>
                                                            Production of Madu By
                                                            <br />
                                                            Kizz Daniel
                                                        </p>
                                                    </div>
                                                    <div className="item-g">
                                                        <img src={Starworks} alt="" />
                                                        <p>
                                                            Production of Starboy By
                                                            <br />
                                                            The Weekend
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="arrows">
                                        <a
                                            className="previous"
                                            style={{ color: "blue" }}
                                            onClick={() => plusSlides(-1)}
                                        >
                                            <img src={PrevBtn} alt="" />
                                        </a>
                                        <a
                                            className="next-arr"
                                            style={{ color: "blue" }}
                                            onClick={() => plusSlides(1)}
                                        >
                                            <img src={NextBtn} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <br />
                                <div style={{ textAlign: "center" }}>
                                    <span className="dot" onClick={() => currentSlide(1)}></span>
                                    <span className="dot" onClick={() => currentSlide(2)}></span>
                                    <span className="dot" onClick={() => currentSlide(3)}></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Works;