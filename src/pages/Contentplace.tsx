import Navbar from "../components/Frontpage/Navbar";
import Herosection from "../components/Frontpage/Herosection";
import Services from "../components/Frontpage/Services";
import Works from "../components/Frontpage/Works";
import About from "../components/Frontpage/About";
import Contact from "../components/Frontpage/Contact";
import Footer from "../components/Frontpage/Footerhomepage";

function Contentplace() {
    return (
        <>
            <Navbar />
            <Herosection />
            <Services />
            <Works />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default Contentplace;