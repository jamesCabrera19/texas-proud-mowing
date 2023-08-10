import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Components
import HeroSection from "./components/heroSection";
import AboutUsSection from "./components/aboutUsSection";
import TeamSection from "./components/teamSection";
import GallerySection from "./components/gallerySection";
import ServiceSection from "./components/serviceSection";
import PricingSection from "./components/pricingSection";
import Footer from "./components/footerSection";

function App() {
    // Color theme
    const primaryColor = "#eeeeee";
    const secondaryColor = "#e5e5e5";
    // const accentColor = "#d0d0d0";
    // const buttonColor = "#c0c0c0";

    // Section colors
    const heroSectionColor = null;
    // const servicesSectionColor = secondaryColor;
    const pricingSectionColor = primaryColor;
    const aboutUsSectionColor = secondaryColor;
    const teamSectionColor = primaryColor;
    const gallerySectionColor = secondaryColor;
    const servicesSectionColor = primaryColor;

    // const servicesRef = useRef(null);
    const pricingRef = useRef(null);
    const aboutUsRef = useRef(null);
    const contactRef = useRef(null);
    const galleryRef = useRef(null);

    const handleNavClick = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };
    const NavLink = ({ onClick, title }) => (
        <div
            style={{
                color: primaryColor,
                alignSelf: "center",
                margin: "3px 10px 0 10px",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            {title}
        </div>
    );

    return (
        <div style={{ backgroundColor: primaryColor }}>
            <header>
                <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                    <Container>
                        <Navbar.Brand
                            onClick={() => handleNavClick(contactRef)}
                            style={{ cursor: "pointer" }}
                        >
                            Butters Lawn Care
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse
                            id="navbar-nav"
                            className="justify-content-end"
                        >
                            <Nav className="ml-auto">
                                <NavLink
                                    onClick={() => handleNavClick(pricingRef)}
                                    title="Services"
                                />
                                <NavLink
                                    onClick={() => handleNavClick(aboutUsRef)}
                                    title="About Us"
                                />
                                <NavLink
                                    onClick={() => handleNavClick(galleryRef)}
                                    title="Gallery"
                                />
                                <NavLink
                                    onClick={() => handleNavClick(contactRef)}
                                    title="Schedule Service"
                                />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <HeroSection
                backgroundColor={heroSectionColor}
                onClick={() => handleNavClick(pricingRef)}
            />
            {/* <ServicesSection backgroundColor={servicesSectionColor} /> */}
            <section ref={pricingRef}>
                <PricingSection backgroundColor={pricingSectionColor} />
            </section>

            <section ref={aboutUsRef}>
                <AboutUsSection backgroundColor={aboutUsSectionColor} />
            </section>

            <section>
                <TeamSection backgroundColor={teamSectionColor} />
            </section>
            <section ref={galleryRef}>
                <GallerySection backgroundColor={gallerySectionColor} />
            </section>
            <section ref={contactRef}>
                <ServiceSection backgroundColor={servicesSectionColor} />
            </section>

            <Footer />
        </div>
    );
}

export default App;
