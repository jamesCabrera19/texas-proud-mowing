const DEVELOPER_KEYS = {
    SERVICE_ID: "service_af8wtm3",
    TEMPLATE_ID: "template_xz1wr4w", // sends email to outlook jctcabrera
    PUBLIC_KEY: "JTd49SKCYVRSBP9RA",
};

const companyData = {
    companyName: "Butters Lawn Care",
    mainTitle: "Welcome to Butters Lawn Care",
    slogan: "Quality Service for Your Lawn",
    subSlogan:
        "We provide affordable top-quality lawn care solutions for a greener and healthier lawn.",
    owner: "Jaime Cabrera",
};

const images = {
    // team images
    owner: require("./imgs/owner.jpeg"),
    co_owner: require("./imgs/co-owner.jpeg"),
    // gallery images
    before: require("./imgs/lawn.jpg"),
    after: require("./imgs/lawn.jpg"),
    // service images
    lawnMowing: require("./imgs/lawn4.jpg"),
    fertilizing: require("./imgs/fertilizer.jpg"),
    additional: require("./imgs/fertilizer.jpg"),
};

const heroData = { data: companyData };

const priceServices = [
    {
        image: images.lawnMowing,
        title: "Lawn Mowing",
        description:
            "Professional lawn mowing services to keep your lawn well-maintained.",
        price: "$45",
        modalTitle: "Lawn Mowing",
        modalBody:
            "Butters Lawn Care's professional lawn mowing service encompasses meticulous mowing of both the front and back lawn, precise trimming of edges, and thorough removal of all clippings, ensuring a pristine and well-groomed appearance.",
    },
    {
        image: images.fertilizing,
        title: "Lawn Fertilizing",
        description:
            "Effective fertilizing treatments to nourish and strengthen your lawn.",
        price: "$TBD",
        modalTitle: "Fertilizing",
        modalBody:
            "Butters Lawn Care's effective fertilizing treatments will provide the essential nutrients your lawn needs to thrive. Our fertilizing service, using carefully selected pet-safe products, will provide your lawn with the necessary nutrients to withstand environmental challenges. Let us help you achieve a vibrant and thriving lawn today!",
    },
    {
        image: images.additional,
        title: "More Services Coming Soon",
        description: "Weed Control, Fertilization Treatment, Lawn Aeration",
        price: "$TBD",
        modalTitle: "Lawn Mowing",
        modalBody:
            "Our comprehensive lawn care services will include effective weed control to eliminate unwanted growth, specialized fertilization treatments to nourish and strengthen your lawn, and meticulous lawn aeration to improve soil health and root development. With our expert care, you'll enjoy a lush, vibrant, and well-maintained lawn that enhances the beauty of your property and withstands various environmental challenges.",
    },
];

const testimonials = [
    {
        name: "Butters",
        testimonial: "Woof woof woof woof woof!",
    },
    {
        name: "Wife",
        testimonial: "They did an okay job mowing the yard",
    },
];

const aboutUs = `As dedicated small business owners, we take immense
pride in providing outstanding customer service and
ensuring your utmost satisfaction. When you choose us
for your lawn care needs, rest assured that we'll offer
a comprehensive range of services to cultivate a
flourishing and stunning lawn. Our skilled team will
effectively address unwanted growth through specialized
weed control, nurture and strengthen your lawn with
personalized fertilization treatments, and enhance soil
health and root development through meticulous lawn
aeration. Your outdoor space will transform into a lush
and vibrant oasis, reflecting our unwavering commitment
to delivering the best results possible. Trust us with
your lawn, and together, we'll craft a captivating
masterpiece that elevates the beauty of your property
and withstands various environmental challenges.`;

const teamMembers = [
    {
        name: "Butters",
        role: "Owner and Founder",
        photo: images.owner,
    },
    {
        name: "James Cabrera",
        role: "Co-founder",
        photo: images.co_owner,
    },
];
const aboutUsSectionData = {
    testimonials,
    aboutUs,
};

const galleryImgs = {
    before: images.before,
    after: images.after,
};
const footerSectionData = {
    OWNER: companyData.owner,
    companyName: companyData.companyName,
};

export {
    priceServices,
    aboutUsSectionData,
    footerSectionData,
    heroData,
    teamMembers,
    galleryImgs,
    DEVELOPER_KEYS,
};
