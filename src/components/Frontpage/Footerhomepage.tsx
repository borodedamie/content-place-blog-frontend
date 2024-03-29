import FooterLogo from "../../assets/Logo2.png";

function Footerhomepage() {
    return (
        <footer className="px-3 py-2" style={{ backgroundColor: "#FFF" }}>
            <hr className="footer-line1" style={{ color: "#000", marginBottom: 25 }} />
            <div className="footer-section container">
                <div className="row justify-content-around" style={{ fontSize: "small" }}>
                    <div className="col-xl-3 col-lg-3 col-md-5 col-12 col">
                        <div className=" d-lg-flex flex-column  footer-box text-xl-start text-center">
                            <div className="d-sm-flex justify-content-end cnt-logo">
                                <a href="" className="">
                                    <img
                                        src={FooterLogo}
                                        alt="logo"
                                        className="img-fluid w-50"
                                    />
                                </a>
                            </div>
                            <div className="cnt-addr text-xl-start text-center">
                                <p className="footer_links my-4">
                                    G7 Unit 2, New Horizon II, Lekki, Lagos.
                                </p>
                            </div>
                            <div
                                className="d-flex align-items-center mt-md-2 mt-5 justify-content-md-between  justify-content-around cnt-icons mt-md-0 mt-5"
                                style={{ width: "100%" }}
                            >
                                <svg
                                    width={17}
                                    height={32}
                                    viewBox="0 0 17 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.92012 32H10.7801V17.4H15.6801L16.4201 11.72H10.7801V8.08C10.7801 6.44 11.2401 5.32 13.6001 5.32H16.6201V0.22C16.1001 0.16 14.3201 0 12.2401 0C7.88012 0 4.92012 2.66 4.92012 7.52V11.72H0.00012207V17.4H4.92012V32Z"
                                        fill="#1E1E1E"
                                    />
                                </svg>
                                <svg
                                    width={36}
                                    height={30}
                                    viewBox="0 0 36 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M35.8801 3.91949C34.9001 5.37949 33.6601 6.67949 32.2201 7.71949C32.2401 8.01949 32.2401 8.33949 32.2401 8.65949C32.2401 18.3595 24.8601 29.5395 11.3801 29.5395C7.24006 29.5395 3.38006 28.3195 0.120056 26.2395C0.700056 26.2995 1.28006 26.3395 1.88006 26.3395C5.32006 26.3395 8.48006 25.1595 10.9801 23.1995C9.45074 23.1679 7.9695 22.6594 6.74321 21.745C5.51692 20.8307 4.60683 19.5562 4.14006 18.0995C4.58006 18.1795 5.04006 18.2395 5.52006 18.2395C6.18006 18.2395 6.84006 18.1395 7.44006 17.9795C5.78126 17.639 4.29062 16.7369 3.21949 15.4253C2.14837 14.1137 1.56228 12.4729 1.56006 10.7795V10.6995C2.56006 11.2395 3.68006 11.5795 4.88006 11.6195C3.87566 10.9458 3.05277 10.0349 2.48417 8.96746C1.91557 7.90003 1.61878 6.70892 1.62006 5.49949C1.62006 4.15949 1.98006 2.89949 2.62006 1.81949C6.24006 6.25949 11.6401 9.17949 17.7401 9.47949C17.6201 8.93949 17.5401 8.37949 17.5401 7.79949C17.5454 5.85627 18.321 3.99445 19.6969 2.62225C21.0729 1.25006 22.9368 0.479485 24.8801 0.479492C27.0001 0.479492 28.9001 1.35949 30.2401 2.79949C31.9001 2.45949 33.4801 1.85949 34.9001 1.01949C34.3401 2.71949 33.1801 4.15949 31.6601 5.05949C33.1173 4.90022 34.5409 4.51563 35.8801 3.91949Z"
                                        fill="#1E1E1E"
                                    />
                                </svg>
                                <svg
                                    width={34}
                                    height={26}
                                    viewBox="0 0 34 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M28.2166 1.01617L26.0833 2.68284L16.9999 9.43284L7.91659 2.61618L5.78325 0.949508C5.28068 0.53375 4.66717 0.274575 4.01873 0.204092C3.3703 0.133608 2.71543 0.254915 2.13527 0.552982C1.5551 0.851048 1.07513 1.31278 0.75482 1.88097C0.434509 2.44915 0.287933 3.09883 0.333253 3.74951V23.0662C0.333253 23.6673 0.572061 24.2439 0.997144 24.669C1.42223 25.094 1.99876 25.3328 2.59992 25.3328H7.91659V12.4662L16.9999 19.2828L26.0833 12.4662V25.3328H31.3999C32.0011 25.3328 32.5776 25.094 33.0027 24.669C33.4278 24.2439 33.6666 23.6673 33.6666 23.0662V3.74951C33.6979 3.10445 33.5411 2.46418 33.2153 1.90655C32.8896 1.34891 32.4088 0.897919 31.8315 0.608392C31.2542 0.318866 30.6053 0.203274 29.9635 0.275667C29.3218 0.348059 28.7149 0.605319 28.2166 1.01617Z"
                                        fill="#1E1E1E"
                                    />
                                </svg>
                                <svg
                                    width={34}
                                    height={34}
                                    viewBox="0 0 34 34"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17 0.333496C21.5283 0.333496 22.0933 0.350163 23.87 0.433496C25.645 0.516829 26.8533 0.795163 27.9166 1.2085C29.0166 1.63183 29.9433 2.20516 30.87 3.13016C31.7175 3.96332 32.3732 4.97114 32.7916 6.0835C33.2033 7.14516 33.4833 8.35516 33.5666 10.1302C33.645 11.9068 33.6666 12.4718 33.6666 17.0002C33.6666 21.5285 33.65 22.0935 33.5666 23.8702C33.4833 25.6452 33.2033 26.8535 32.7916 27.9168C32.3744 29.0298 31.7185 30.0379 30.87 30.8702C30.0366 31.7174 29.0288 32.3731 27.9166 32.7918C26.855 33.2035 25.645 33.4835 23.87 33.5668C22.0933 33.6452 21.5283 33.6668 17 33.6668C12.4716 33.6668 11.9066 33.6502 10.13 33.5668C8.35498 33.4835 7.14665 33.2035 6.08331 32.7918C4.97052 32.3743 3.96252 31.7184 3.12998 30.8702C2.28232 30.0371 1.62653 29.0293 1.20831 27.9168C0.79498 26.8552 0.516646 25.6452 0.433313 23.8702C0.35498 22.0935 0.333313 21.5285 0.333313 17.0002C0.333313 12.4718 0.34998 11.9068 0.433313 10.1302C0.516646 8.3535 0.79498 7.14683 1.20831 6.0835C1.62537 4.97046 2.28132 3.96236 3.12998 3.13016C3.96276 2.28221 4.97069 1.62638 6.08331 1.2085C7.14665 0.795163 8.35331 0.516829 10.13 0.433496C11.9066 0.355163 12.4716 0.333496 17 0.333496ZM17 8.66683C14.7898 8.66683 12.6702 9.5448 11.1074 11.1076C9.54462 12.6704 8.66665 14.79 8.66665 17.0002C8.66665 19.2103 9.54462 21.3299 11.1074 22.8927C12.6702 24.4555 14.7898 25.3335 17 25.3335C19.2101 25.3335 21.3297 24.4555 22.8925 22.8927C24.4553 21.3299 25.3333 19.2103 25.3333 17.0002C25.3333 14.79 24.4553 12.6704 22.8925 11.1076C21.3297 9.5448 19.2101 8.66683 17 8.66683ZM27.8333 8.25016C27.8333 7.69763 27.6138 7.16772 27.2231 6.77702C26.8324 6.38632 26.3025 6.16683 25.75 6.16683C25.1974 6.16683 24.6675 6.38632 24.2768 6.77702C23.8861 7.16772 23.6666 7.69763 23.6666 8.25016C23.6666 8.8027 23.8861 9.3326 24.2768 9.7233C24.6675 10.114 25.1974 10.3335 25.75 10.3335C26.3025 10.3335 26.8324 10.114 27.2231 9.7233C27.6138 9.3326 27.8333 8.8027 27.8333 8.25016ZM17 12.0002C18.3261 12.0002 19.5978 12.5269 20.5355 13.4646C21.4732 14.4023 22 15.6741 22 17.0002C22 18.3262 21.4732 19.598 20.5355 20.5357C19.5978 21.4734 18.3261 22.0002 17 22.0002C15.6739 22.0002 14.4021 21.4734 13.4644 20.5357C12.5268 19.598 12 18.3262 12 17.0002C12 15.6741 12.5268 14.4023 13.4644 13.4646C14.4021 12.5269 15.6739 12.0002 17 12.0002Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-12 d-flex justify-content-center  text-xl-start text-center mt-lg-2 mt-5">
                        <div className="footer-box ">
                            <h5 className="text-dark lead mb-4 TandC-header">Company</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <p>
                                        {" "}
                                        <a
                                            href="{{ url_for('home_page') }}"
                                            className="footer-link text-dark mb-2 footer_links text-decoration-none"
                                        >
                                            Privacy Policy
                                        </a>
                                    </p>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#services"
                                        className="footer-link text-dark mb-2 footer_links text-decoration-none"
                                    >
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-12 justify-content-center text-xl-start text-center mt-md-2 mt-5">
                        <div className="footer-box">
                            <h5 className="text-dark lead mb-4 TandC-header">Pages</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"></li>
                                <li className="mb-2">
                                    <p>
                                        {" "}
                                        <a
                                            href="{{ url_for('home_page') }}"
                                            className="footer-link text-dark mb-2 footer_links text-decoration-none"
                                        >
                                            Our Services
                                        </a>
                                    </p>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#services"
                                        className="footer-link text-dark mb-2 footer_links text-decoration-none"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#services"
                                        className="footer-link text-dark mb-2 footer_links text-decoration-none"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#services"
                                        className="footer-link text-dark mb-2 footer_links text-decoration-none"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#services"
                                        className="footer-link text-dark mb-2 footer_links text-decoration-none"
                                    >
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-12 justify-content-center text-xl-start text-center mt-md-2 mt-5">
                        <h5 className="lead text-dark mb-4 TandC-header">Subscribe</h5>
                        <form method="POST" id="subscriptionForm" data-id="ThKXbMPLch">
                            <div id="sub-Alert" />
                            <input
                                type="hidden"
                                name="csrf_token"
                                defaultValue="{{ csrf_token() }}"
                            />
                            <p className="text-dark mt-2 footer_links">
                                Get the latest updates via email. You may unsubscribe any time
                            </p>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="form-control mb-3"
                                placeholder="Enter your Email address"
                            />
                            <button
                                className="btn text-start msg-btn"
                                id="contact_form_submit"
                                type="submit"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
                <hr className="footer-line2" style={{ color: "#000", marginBottom: 25 }} />
                <div id="copyright" className="container">
                    <div className="text-center" style={{ fontSize: "small" }}>
                        <p className="text-dark footer_links">
                            <i className="far fa-copyright me-2 " />
                            2023 The Content Place, Nig. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footerhomepage;