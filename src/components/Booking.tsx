import { FormEvent, useState } from 'react';
import { Bounce, toast } from 'react-toastify';

function Booking() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        session_time: '',
        how_did_you_hear_about_us: '',
        services: '',
        date: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data) {
                toast('Booking submitted successfully!', {
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
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    session_time: '',
                    how_did_you_hear_about_us: '',
                    services: '',
                    date: ''
                });
            }
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className="bookings">
            <h1>BOOK A SESSION AT THE CONTENT PLACE</h1>

            <form onSubmit={handleSubmit}>
                <div className="input-con-grid">
                    <div className="input-con">
                        <label htmlFor="firstname" style={{ fontWeight: "bold" }}>First Name</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                    </div>

                    <div className="input-con">
                        <label htmlFor="lastname" style={{ fontWeight: "bold" }}>Last Name</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
                    </div>
                </div>

                <div className="input-con-grid">
                    <div className="input-con">
                        <label htmlFor="email" style={{ fontWeight: "bold" }}>
                            Email
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="input-con">
                        <label htmlFor="phone_number" style={{ fontWeight: "bold" }}>
                            Phone Number
                        </label>
                        <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} />
                    </div>
                </div>

                <div className="input-con-grid">
                    <div className="input-con inputControl">
                        <label htmlFor="session_time" style={{ fontWeight: "bold" }}>
                            Session Time
                        </label>
                        <select name="session_time" value={formData.session_time} onChange={handleChange}>
                            <option value={2}>2/half hours</option>
                            <option value={4}>4 hours</option>
                            <option value={8}>8 hours</option>
                            <option value={12}>12 hours</option>
                            <option value={24}>24 hours</option>
                        </select>
                    </div>
                    <div className="input-con">
                        <label htmlFor="how_did_you_hear_about_us" style={{ fontWeight: "bold" }}>
                            How did you hear about us?
                        </label>
                        <select name="how_did_you_hear_about_us" value={formData.how_did_you_hear_about_us} onChange={handleChange}>
                            <option value="word_of_mouth">Word of Mouth</option>
                            <option value="social_media">Social Media</option>
                            <option value="google_search">Google Search</option>
                        </select>
                    </div>
                </div>

                <div className="input-con-grid">
                    <div className="input-con">
                        <label htmlFor="services" style={{ fontWeight: "bold" }}>
                            Services
                        </label>
                        <select name="services" value={formData.services} onChange={handleChange}>
                            <option value="co_working_space">Co-working space</option>
                            <option value="art_gallery">Art Gallery</option>
                            <option value="art_exhibition">Art Exhibition</option>
                            <option value="fashion_other_exhibition">Fashion/Other Exhibition</option>
                            <option value="paint_sip">Paint &amp; Sip</option>
                            <option value="photo_studio">Photo Studio</option>
                            <option value="podcast">Podcast</option>
                            <option value="music_recording_session">Music Recording Session</option>
                            <option value="video_shoot">Video Shoot</option>
                        </select>
                    </div>
                    <div className="input-con">
                        <label htmlFor="date" style={{ fontWeight: "bold" }}>
                            Date
                        </label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    </div>
                </div>

                <div className="input-con">
                    <button type="submit" className="booking-submit-btn" id="wait">
                        {loading ? 'Submitting booking...' : 'Submit'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Booking;