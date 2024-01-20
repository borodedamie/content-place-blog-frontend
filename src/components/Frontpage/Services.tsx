import Mic from "../../assets/mic.png";
import Tv from "../../assets/tv.png";
import Text from "../../assets/text.png";
import Vector from "../../assets/Vector.png";

function Services() {
    return (
        <section
            className="px-5 text-center text-center text-lg-start "
            style={{ backgroundColor: "#fff", marginTop: 140 }}
        >
            <div className="container">
                <h5 className="service-header">OUR SERVICES</h5>
                <h3 className="service-text">
                    Solutions for every business need, we offer the services below at the
                    content place
                </h3>
                <div className="row row-cols-1 row-cols-md-2 service-section">
                    <div className="col mb-4 h-100">
                        <div className="card service-box border-0">
                            <div className="card-body service-inner">
                                <div className="row p-2">
                                    <div className="col col-lg-1 icon-ctn ">
                                        <img
                                            src={Mic}
                                            alt="Icon"
                                            className="service-icon"
                                        />
                                    </div>
                                    <div className="col-lg row service-info text-left-md  ">
                                        <h5 className="card-title " id="service-head">
                                            Audio Content Creation
                                        </h5>
                                        <p className="card-text service-det">
                                            With our fully equipped audio studio, we offer music
                                            production, podcast production, jingles and voice over
                                            creations, playlist curating, musical mixing &amp; mastering,
                                            and other audio-related services. You can book a session with
                                            us today.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4 h-100">
                        <div className="card service-box border-0">
                            <div className="card-body service-inner">
                                <div className="row p-2">
                                    <div className="col col-lg-1 icon-ctn ">
                                        <img
                                            src={Tv}
                                            alt="Icon"
                                            className="service-icon"
                                        />
                                    </div>
                                    <div className="col-lg row service-info text-left-md  ">
                                        <h5 className="card-title " id="service-head">
                                            Visual Content Creation
                                        </h5>
                                        <p className="card-text service-det">
                                            At The Content Place, we would help you visualize your ideas,
                                            our work starts with listening; discovering your vision, and
                                            engaging in processes that are focused, effective and
                                            enjoyable for you. We offer visual services such as music
                                            video creation, photography, skit making, paintings and
                                            graphics design.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4 h-100">
                        <div className="card service-box border-0">
                            <div className="card-body service-inner">
                                <div className="row p-2">
                                    <div className="col col-lg-1 icon-ctn ">
                                        <img
                                            src={Text}
                                            alt="Icon"
                                            className="service-icon"
                                        />
                                    </div>
                                    <div className="col-lg row service-info text-left-md  ">
                                        <h5 className="card-title " id="service-head">
                                            Web Services
                                        </h5>
                                        <p className="card-text service-det">
                                            With our tech team, we help businesses transform their ideas
                                            into satisfying web products. Our web services includes web
                                            development, e-mail development and marketing, social media
                                            management, digital marketing, UI &amp; UX design, Mobile App
                                            development, and Search Engine Optimization (SEO).{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4 h-100">
                        <div className="card service-box border-0">
                            <div className="card-body service-inner">
                                <div className="row p-2">
                                    <div className="col col-lg-1 icon-ctn ">
                                        <img
                                            src={Vector}
                                            alt="Icon"
                                            className="service-icon"
                                        />
                                    </div>
                                    <div className="col-lg row service-info text-left-md  ">
                                        <h5 className="card-title " id="service-head">
                                            Text Content Creation
                                        </h5>
                                        <p className="card-text service-det">
                                            {" "}
                                            At the content place, we have professional and certified
                                            copywriters who are willing to help you tell your stories with
                                            words. Also, we assist with transcribing audio to text, book
                                            reviews, proof reading, book publishing and distribution,
                                            press release communications, cover letter writing, and blog
                                            writing.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;