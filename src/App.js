import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/header";
import HeroSection from "./components/heroSection";
import ServicesSection from "./components/serviceSection";
import AboutUsSection from "./components/aboutUsSection";
import TeamSection from "./components/teamSection";
import GallerySection from "./components/gallerySection";
import ContactSection from "./components/contactSection";
import Footer from "./components/footerSection";

function App() {
    // Color theme
    const primaryColor = "#252525";
    const secondaryColor = "#4a4a4a"; // Earthy Brown
    const accentColor = "#a1887f"; // Blue
    const highlightColor = "#b71c1c"; // Yellow

    // Section colors
    const heroSectionColor = primaryColor; // Green
    const servicesSectionColor = secondaryColor; // Earthy Brown
    const aboutUsSectionColor = primaryColor; // Green
    const teamSectionColor = secondaryColor; // Earthy Brown
    const gallerySectionColor = primaryColor; // Green
    const contactSectionColor = accentColor; // Blue
    const footerColor = secondaryColor; // Earthy Brown

    // Navbar color
    const navbarColor = primaryColor; // Green

    // Footer color
    const FooterColor = secondaryColor; // Earthy Brown

    return (
        <div>
            <header>
                <NavBar />
            </header>

            <HeroSection backgroundColor={heroSectionColor} />

            <ServicesSection backgroundColor={servicesSectionColor} />
            <AboutUsSection backgroundColor={servicesSectionColor} />
            <AboutUsSection backgroundColor={aboutUsSectionColor} />

            <TeamSection backgroundColor={teamSectionColor} />
            <GallerySection backgroundColor={gallerySectionColor} />
            <ContactSection backgroundColor={contactSectionColor} />

            <Footer />
        </div>
    );
}

export default App;
