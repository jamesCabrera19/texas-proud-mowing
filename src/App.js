import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/header";
import HeroSection from "./components/heroSection";
import ServicesSection from "./components/serviceSection";
import AboutUsSection from "./components/aboutUsSection";
import TeamSection from "./components/teamSection";
import GallerySection from "./components/gallerySection";
import ContactSection from "./components/contactSection";
import PricingSection from "./components/pricingSection";
import Footer from "./components/footerSection";

function App() {
    // Color theme
    const primaryColor = "#eeeeee";
    const secondaryColor = "#e5e5e5";
    const accentColor = "#d0d0d0";
    const buttonColor = "#c0c0c0";

    // Section colors
    const heroSectionColor = null;
    const servicesSectionColor = secondaryColor;
    const pricingSectionColor = primaryColor;
    const aboutUsSectionColor = secondaryColor;
    const teamSectionColor = primaryColor;
    const gallerySectionColor = secondaryColor;
    const contactSectionColor = primaryColor;

    return (
        <div style={{ backgroundColor: primaryColor }}>
            <header>
                <NavBar />
            </header>
            <HeroSection backgroundColor={heroSectionColor} />
            <ServicesSection backgroundColor={servicesSectionColor} />
            <PricingSection backgroundColor={pricingSectionColor} />
            <AboutUsSection backgroundColor={aboutUsSectionColor} />
            <TeamSection backgroundColor={teamSectionColor} />
            <GallerySection backgroundColor={gallerySectionColor} />
            <ContactSection backgroundColor={contactSectionColor} />

            <Footer />
        </div>
    );
}

export default App;
