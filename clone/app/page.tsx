
import Footer from "./landing-page/Footer/Page";
import Hero1 from "./landing-page/Hero1/page";
import Hero2 from "./landing-page/Hero2/page";
import Hero3 from "./landing-page/Hero3/page";
import Hero4 from "./landing-page/Hero4/page";
import Hero5 from "./landing-page/Hero5/page";
import Hero6 from "./landing-page/Hero6/page";
import Hero7 from "./landing-page/Hero7/page";
import Hero8 from "./landing-page/Hero8/page";

import Navbar from "./landing-page/Navbar/navbar";



const LandingPage = () => {
    return(
        <div>
            <Navbar />
            <Hero1 />
            <Hero2 />
            <Hero3 />
            <Hero4 />
            <Hero5 />
            <Hero6 />
            <Hero7 />
            <Hero8 />
            <Footer />
        </div>
    )
}

export default LandingPage;