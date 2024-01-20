function Contact() {
    return (
        <section className="p-5 " id="contact">
            <div className="container p-4">
                <div className="row justify-content-start ">
                    <div className="col-lg-12">
                        <div className="section-header text-center text-lg-start ">
                            <h5 className="contact-header">GET IN TOUCH WITH US</h5>
                            <h3 className="contact-text">
                                Fill up the form and our team will get back to you within 24 hours
                            </h3>
                        </div>
                    </div>
                    <div id="alert-box" style={{ textAlign: "center" }} />
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <form>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="col-sm-2
                              col-form-label contact-label"
                                        >
                                            <strong>Name</strong>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="col-sm-2 col-form-label contact-label"
                                        >
                                            <strong>Email</strong>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="col-sm-2 col-form-label contact-label"
                                        >
                                            <strong>Phone</strong>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            placeholder=" 0812 456 7890"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="col-auto col-form-label contact-label"
                                        >
                                            <strong>For</strong>
                                        </label>
                                        <select
                                            className="form-select"
                                            name="service"
                                            id="service"
                                            aria-label="Default select example"
                                        >
                                            <option> Select Service</option>
                                            <option value="audio">Audio Content Creation</option>
                                            <option value="visual">Visual Content Creation</option>
                                            <option value="web">Web Services</option>
                                            <option value="text">Text Content Creation</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="message"
                                            className="col-auto col-form-label contact-label"
                                        >
                                            <strong>Message</strong>
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols={30}
                                            rows={4}
                                            placeholder="Your Message"
                                            className="form-control"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="g-recaptcha mb-4 d-flex justify-content-center"
                                    data-sitekey="6LfTnGkeAAAAAEpz-kC8HPTPvdnfIZ98gz6TFT0_"
                                />
                                <div className="text-left">
                                    <button
                                        className="btn text-start msg-btn"
                                        id="contact_form_submit"
                                        type="submit"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;