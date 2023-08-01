import Rugny from '../assets/rugny-pic.png';

function Hero() {
    return (
        <div className="container">
            <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active c-item">
                        <img src={Rugny} className="d-block w-100 c-img" alt="Slide 1" />
                        <div className="carousel-caption top-0 mt-0">
                            <p className="mt-2 text-uppercase text-center text-md-start  blogHead1">SPORTS</p>
                            <h1 className="text-capitalize text-center text-md-start blogHead2 mt-md-5 mt-2 ">USA and Australia both
                                settled<br />
                                for a draw last night. An Intense<br />
                                match it was.</h1>
                            <div className="blog-btn2">
                                <button className="btn px-4 py-2 mt-md-5 mt-2  text-center  more">READ MORE</button>
                                <button className="btn px-4 py-2 mt-md-5 mt-2 text-center view">VIEW SPORTS</button>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item active c-item">
                        <img src={Rugny} className="d-block w-100 c-img" alt="Slide 1" />
                        <div className="carousel-caption top-0 mt-2">
                            <p className="mt-2 text-uppercase text-center text-md-start  blogHead1">SPORTS</p>
                            <h1 className="text-capitalize text-center text-md-start blogHead2 mt-md-5 mt-2 ">USA and Australia both
                                settled<br />
                                for a draw last night. An Intense<br />
                                match it was.</h1>
                            <div className="blog-btn2">
                                <button className="btn px-4 py-2 mt-md-5 mt-2  text-center  more">READ MORE</button>
                                <button className="btn px-4 py-2 mt-md-5 mt-2 text-center view">VIEW SPORTS</button>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item active c-item">
                        <img src={Rugny} className="d-block w-100 c-img" alt="Slide 1" />
                        <div className="carousel-caption top-0 mt-2">
                            <p className="mt-2 text-uppercase text-center text-md-start  blogHead1">SPORTS</p>
                            <h1 className="text-capitalize text-center text-md-start blogHead2 mt-md-5 mt-2 ">USA and Australia both
                                settled<br />
                                for a draw last night. An Intense<br />
                                match it was.</h1>
                            <div className="blog-btn2">
                                <button className="btn px-4 py-2 mt-md-5 mt-2  text-center  more">READ MORE</button>
                                <button className="btn px-4 py-2 mt-md-5 mt-2 text-center view">VIEW SPORTS</button>
                            </div>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                    <span aria-hidden="true">
                        <img src="./images/next-news.png" alt="" className="rotate-180" />
                    </span>
                    <span className="visually-hidden"><img src="./images/next-news.png" alt="" /></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                    <span className="view"><img src="./images/next-news.png" alt="" /></span>
                </button>
            </div>
        </div>
    )
}

export default Hero;