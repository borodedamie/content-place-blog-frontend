import '../index.css';
import Logo from '../assets/Logo2.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    
    return (
        <section className="p-5 text-center text-md-start" style={{ backgroundColor: "#fff" }}>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ height: "100px" }}>
                <div id="navigation" className="container">
                    <div onClick={() => navigate('/')} className="navbar-brand">
                        <img src={Logo} alt="" className="nav-logo" />
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse navigation-bar"
                        id="navbarScroll"
                        style={{ background: "#fff" }}
                    >
                        <ul
                            className="navbar-nav ms-auto my-2 my-lg-0 mx-3 text-center no-wrap d-flex align-items-center"
                        >
                            <li>
                                <a onClick={() => navigate('/')}>
                                    <button className="btn text-center blog-btn" id="leave-blog" type="submit">
                                        LEAVE BLOG
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Header;