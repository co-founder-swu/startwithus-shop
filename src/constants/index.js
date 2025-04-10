import {
  notification1,
  notification2,
  notification3,
  notification4,
  notification5,
  notification6,
  notification7,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  plusSquare,
  ts18,
  ts19,
  ts20,
  BP1Intro,
  BP2Intro,
  BP3Intro,
  jewellerythumbnail,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "/#services",
  },
  {
    id: "1",
    title: "Blog",
    url: "/blogs",
  },
  {
    id: "2",
    title: "Portfolio",
    url: "/#portfolio",
  },
  {
    id: "3",
    title: "Pricing",
    url: "/#pricing",
  },
    {
    id: "4",
    title: "Roadmap",
    url: "/#roadmap",
  },
  {
    id: "5",
    title: "About",
    url: "/#about",
  },
  {
    id: "6",
    title: "Book a Call",
    url:"https://calendly.com/ms-shubhada/start-with-us-getting-started-meeting",
    onlyMobile: true,
  },
];


export const notificationImages = [notification1, notification2, notification3, notification4, notification5, notification6, notification7];


export const roadmap = [
  {
    id: "0",
    title: "Why Start With Us?",
    text: "At Start With Us, we specialize in transforming your business vision into a captivating online presence. Founded in 2023 by Shubhada and Vaibhav, our mission is to deliver bespoke web design, development, and comprehensive digital marketing solutions tailored to your unique needs. We believe in creating seamless, engaging user experiences that not only attract but retain customers. Our services include branding, product design, content creation, copywriting, SEO optimization, marketing, and advertising, ensuring your business stands out in the digital landscape.",
    date: "ABOUT US",
    imageUrl: roadmap1,
  },
  {
    id: "1",
    title: "Excellence, Innovation and Client Success",
    text: "At Start With Us, our vision is to revolutionize the way businesses interact with their customers online. We aim to provide custom-made, user-centric web solutions that enhance user experience and drive business growth. Our goal is to empower businesses to reach their full potential by leveraging cutting-edge technology and strategic marketing, advertising, and SEO practices. We are committed to building lasting relationships with our clients and helping them create loyal customer bases that propel their success. By addressing common loopholes in current web and marketing strategies, we ensure our clients are always ahead of the curve." ,    
    date: "OUR VISION",
    imageUrl: roadmap3,
  },
  {
    id: "2",
    title: "Even Great Stories Start with a Beginning",
    text: "The journey of Start With Us began with the vision of two friends, Shubhada and Vaibhav, who identified significant gaps in the market. Shubhada, an experienced web designer and developer, realized that many businesses struggled to find the right digital platform to truly represent their brand. Additionally, Vaibhav recognized that many companies' marketing and advertising strategies were not tailored to their specific needs, leading to missed opportunities. Together, they combined their expertise in web development, SEO, and strategic marketing to create a company that offers tailored web solutions and effective marketing strategies. Our story is one of passion, innovation, and a relentless drive to help businesses excel.",    
    date: "OUR BRAND STORY",
    imageUrl: roadmap2,
  },
  {
    id: "3",
    title: "Message from Creators of SWU",
    text: "Welcome to Start With Us! We founded this company to bridge the gap businesses face in web design and marketing. With Shubhada's expertise in web development and Vaibhav's proficiency in SEO, marketing, and advertising, we offer tailored solutions that ensure your brand stands out. Our comprehensive services include custom web design, development, branding, content creation, SEO optimization, and strategic marketing. We're committed to providing a seamless user experience, building a loyal customer base, and turning your business into a star. Join us on this journey to digital excellence.",    
    date: "FOUNDER'S CORNER",
    imageUrl: roadmap4,
  },
];


export const pricing = [
  {
    id: "0",
    title: "Essential",
    description: "Perfect for startups needing web services, SEO, branding, marketing, and WordPress.",    
    price: "299",
    features: [
      "Custom Website Design (Up to 5 pages)",
      "Web Development or WordPress",
      "Basic SEO Optimization",
      "Basic Branding",
      "Social Media Setup",
      "Email Support"
    ],
  },
  {
    id: "1",
    title: "Growth",
    description: "For growing businesses needing advanced web solutions, SEO, branding, and WordPress.",  
    price: "599",
    features: [
      "Custom Website Design (Up to 15 pages)",
      "Advanced Web or WordPress Development",
      "Advanced SEO Optimization",
      "Monthly Content Updates (Up to 5 changes)",   
      "Branding Package",
      "Marketng Campaigns"
    ],
  },
  {
    id: "2",
    title: "Ecommerce Suite",
    description:    "For enterprises needing comprehensive web solutions, advanced SEO, branding, and e-commerce", 
    price: "999",
    features: [
      "Custom Website Design (Unlimited pages)",
      "Comprehensive Web and WordPress Development",
      "Comprehensive SEO Optimization",
      "Weekly Content Updates (Unlimited changes)",
      "Complete Branding Package", 
      "Full Marketing and Advertising Campaigns",
    ],
  },
];

// constants/index.js

export const blogList = [
  {
    id: "strong-online-presence-business-success",
    date: "2024-07-20",
    title: "The Importance of a Strong Online Presence for Business Success",
    summary: "In today's digital landscape, a strong online presence is essential for business success. Enhancing visibility, engagement, and brand credibility drives growth and customer satisfaction. At Start With Us, we create compelling digital strategies to help businesses thrive online.",
    imageUrl: BP1Intro,
  },
  {
    id: "custom-web-solutions-to-boost-business",
    date: "2024-07-20",
    title: "How Custom Web Solution Boost Your Business",
    summary: "Custom web solutions drive business growth by offering tailored user experiences, enhanced brand identity, and scalability. They ensure optimal performance, security, and SEO. At Start With Us, we create bespoke websites that provide a competitive edge and foster customer loyalty.",
    imageUrl: BP2Intro,
  },
  {
    id: "branding-to-build-customer-loyalty",
    date: "2024-07-21",
    title: "The Role of Branding in Building Customer Loyalty",
    summary: "Effective branding builds customer loyalty through emotional connections, consistency, and clear values. It sets businesses apart and symbolizes quality. At Start With Us, we help craft strong brands that drive lasting success.",
    imageUrl: BP3Intro,
  },
    {
    id: "transform-your-jewellery-brand-along-hyper-realistic-ai-model-photography",
    date: "2025-04-09",
    title: " Transform Your Jewellery Brand with Hyper-Realistic AI Model Photography",
    summary: "Discover how AI model photography is revolutionizing jewellery branding by replacing costly photoshoots with hyper-realistic visuals. It offers faster turnaround, lower costs, and endless styling options to showcase your products beautifully. Perfect for emerging brands looking to elevate their online presence without breaking the bank.",
    imageUrl:jewellerythumbnail,
  },
  // Add more blog entries as needed
];


export const footerLinks = [
  {
    title: "Useful Links",
      tabs: [
    {
      id:"0",
      url: "#about",
      name: "About",
    },
    {
      id:"1",
      url: "#services",
      name: "Services",
    },
    {
      id:"2",
      url: "#roadmap",
      name: "Roadmap",
    },
    {
      id:"3",
      url: "#portfolio",
      name: "Portfolio",
    },
    {
      id:"4",
      url: "#industries",
      name: "Industries",
    },
    {
      id:"5",
      url: "#contact",
      name: "Contact Us",
    },
  ],
  },
  {
    title: "Services",
      services: [
    {
      id:"0",
      url: "#services",
      name: "Web Design",
    },
    {
      id:"1",
      url: "#services",
      name: "Web Dev",
    },
    {
      id:"2",
      url: "#services",
      name: "Branding",
    },
    {
      id:"3",
      url: "#services",
      name: "Marketing",
    },
    {
      id:"4",
      url: "#services",
      name: "SEO & Hosting",
    },
    {
      id:"5",
      url: "#services",
      name: "Content Writing",
    },
  ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: ts19,
    url: "https://www.instagram.com/startwithus__/",
  },
  {
    id: "social-media-2",
    icon: ts18,
    url: "https://www.facebook.com/profile.php?id=61560347054878",
  },
  {
    id: "social-media-3",
    icon: ts20,
    url: "https://www.linkedin.com/in/start-with-us-b43558311/",
  },
];