import { FormEvent, useState } from 'react';
import { Bounce, toast } from 'react-toastify';

function Contact() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data) {
                if (data) {
                    toast('Thank you for contacting us.', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });

                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: ''
                    });
                }
            }
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
                        <form onSubmit={handleSubmit}>
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
                                            placeholder="Your Name"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleChange}
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
                                            placeholder="Your Email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
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
                                            placeholder=" 0812 456 7890"
                                            className="form-control"
                                            value={formData.phone}
                                            onChange={handleChange}
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
                                            aria-label="Default select example"
                                            value={formData.service}
                                            onChange={handleChange}
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
                                            placeholder="Your Message"
                                            className="form-control"
                                            value={formData.message}
                                            onChange={handleChange}
                                            style={{ height: '200px' }}
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
                                        {loading ? 'Sending message...' : 'SEND MESSAGE'}
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