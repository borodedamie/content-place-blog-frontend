import Newteam from "../../assets/new_team.png";

function About() {
    return (
        <section
            className="py-5 px-1"
            style={{ backgroundColor: "#FAFAFA" }}
            id="about"
        >
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md  py-1 px-5" style={{ marginTop: 45 }}>
                        <h2 className="text-dark display-5 team-header">The Content Place</h2>
                        <p className="text-dark team-text" style={{ marginTop: 45 }}>
                            To grow your brand, you need to be intentional about your message thus
                            your content.
                        </p>
                        <ul className="text-dark team-text">
                            <li>Is it innovative, modern and engaging?</li>
                            <li>Is the message relayed in your brand tone and voice?</li>
                            <li>Does it communicate your brand essence?</li>
                            <li>Does your content give value to the consumer?</li>
                        </ul>
                        <p />
                        <p className="text-dark team-text">
                            If you had hesitations answering these questions, you need us in your
                            corner. I know you would want to ask who we are
                        </p>
                        <p className="text-dark team-text">
                            We are a group of avid content enthusiasts with a diversified global
                            mindset. We are passionate about what we do, so working around the
                            clock to meet and exceed our client's expectations is part of our
                            touchstone. We are always looking out for that big idea on every
                            campaign.
                        </p>
                        <p className="text-dark team-text">
                            The Content Place is a hub where content is conceptualized and
                            produced to suit all clients need, brand essence, and target audience.
                            Here at The Content place, we think and work beyond borders.
                        </p>
                        {/* <a href="" class="btn btn-light mt-3 footer-btn px-3">
                  <i class="bi bi-chevron-right"></i> Read More
              </a> */}
                    </div>
                    <div className="col-md d-flex justify-content-center align-items-center team-img">
                        <img
                            src={Newteam}
                            className="img-fluid w-100"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;