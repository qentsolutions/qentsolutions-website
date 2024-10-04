const config = {
  appName: "QentSolutions",
  appDescription:
    "Qent Solutions is an innovative group specializing in creating tailored technological solutions to address diverse business challenges. We focus on developing custom software and websites that enhance operational efficiency and deliver optimal user experiences. Our expert team is dedicated to delivering quality and satisfaction, empowering clients to thrive in a competitive landscape.",
  domainName: "https://qentsolutions.com",
  stripe: {
    plans: [
      {
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        name: "Basic",
        description: "Ideal for small teams",
        price: 49,
        features: [
          { name: "Contact Management" },
          { name: "Task Management" },
          { name: "Basic Reporting" },
          { name: "Email Integration" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Business",
        description: "Designed for growing teams",
        price: "CUSTOM",
        features: [
          { name: "Advanced Contact Management" },
          { name: "Sales Pipeline Management" },
          { name: "Custom Reporting" },
          { name: "Email Marketing Integration" },
          { name: "Dedicated Account Manager" },
        ],
      },
    ],
  },
};

export default config;
