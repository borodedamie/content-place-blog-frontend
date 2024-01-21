import Contentplacelogo from "../../assets/Logo2.png";
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();

    return (
        <section className="p-5  text-center text-md-start" style={{ backgroundColor: "#fff" }}>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ height: "100px" }}>
                <div id="navigation" className="container">
                    <a onClick={() => navigate('/')} className="navbar-brand" style={{ cursor: "pointer" }}>
                        <img src={Contentplacelogo} alt="" className="nav-logo" id="blog-logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll" aria-exppanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navigation-bar" id="navbarScroll" style={{ background: "#fff" }}>
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 ml-auto text-center no-wrap d-flex justify-content-center customScroll">
                            <li className="nav-item dropdown d-inline-block" id="service">
                                <a className="nav-link dropdown-toggle d-inline-block" href="#" id="navbarScrollingDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    OUR SERVICES
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li className="nav-item"><a className="dropdown-item " href="#">Audio Content Creation</a></li>
                                    <li className="nav-item"><a className="dropdown-item " href="#">Visual Content Creation</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="#">Text Content Creation</a></li>
                                    <li className="nav-item"><a className="dropdown-item " href="#">Web Services</a></li>
                                </ul>
                            </li> 
                            <li className="nav-item d-inline-block" id="about">
                                <a className="nav-link disabled d-inline-block" href="#" tabIndex={-1} aria-disabled="true">ABOUT US</a>
                            </li>
                            <li className="nav-item d-inline-block" id="contact">
                                <a className="nav-link disabled d-inline-block" href="#" tabIndex={-1} aria-disabled="true">CONTACT US</a>
                            </li>

                            <li className="nav-btn" onClick={() => navigate('/booking')}>
                                <button className="btn text-center booking-btn" type="submit">BOOK A SESSION</button>
                            </li>
                            <li>
                                <a onClick={() => navigate('/blog')}><button className="btn text-center blog-btn text-decoration-none"
                                    type="submit">VISIT BLOG</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar;