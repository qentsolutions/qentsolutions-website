const config = {
  appName: "QentSolutions",
  appDescription:
    "An all-in-one platform designed to streamline project management, combining task boards, real-time collaboration, document sharing, and visual timelines. Simplify workflow management, enhance team productivity, and drive project success with powerful tools for every step of the process.",
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
