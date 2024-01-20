import BannerImg from "../../assets/banner-img2.png";

function Herosection() {
    return (
        <section
            className="px-5 text-center text-md-start hero-section"
            style={{ backgroundColor: "#fff" }}
        >
            <div className="container">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
                    <div className="col-md-6 col-12">
                        <h1 className="hero-header">We make content out of everything.</h1>
                        <p className="lead hero-text my-4">
                            The Content Place is a hub where content is conceptualized and
                            produced to suit all clients need, brand essence, and target audience.
                            Here; we think and work beyond borders.
                        </p>
                        <button className="btn text-center cta-btn" type="submit">
                            READ MORE
                            <a href="#about" className="cta-btn mb-2" />
                        </button>
                    </div>
                    <div className="d-lg-flex justify-content-end ">
                        <img
                            src={BannerImg}
                            alt=""
                            className="img-fluid w-100 mt-4 hero-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection;