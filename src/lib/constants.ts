export interface MenuType {
  label: string;
  description: string;
  link?: {
    label: string;
    url?: string;
  };
  sections: Array<{
    title: string;
    items: Array<{
      label: string;
      url?: string;
    }>;
  }>;
  extra: {
    title: string;
    description: string;
    action: string;
  };
}

export const menus: Array<MenuType> = [
  {
    label: "Financial Advice",
    description: "Explore our financial planning services",
    link: {
      label: "Working with a financial advisor",
    },
    sections: [
      {
        title: "Advice Services",
        items: [
          {
            label: "Free Money Coaching",
          },
          {
            label: "Dedicated Planning Services",
          },
          {
            label: "Managed Accounts Program",
          },
          {
            label: "Trust Services",
          },
        ],
      },
    ],
    extra: {
      title: "Find a Financial Advisor",
      description: "Get started on your journey to financial confidence today.",
      action: "Start your search",
    },
  },
  {
    label: "Products",
    description: "See what products our advisors can help with",
    link: {
      label: "Products & services",
    },
    sections: [
      {
        title: "Banking",
        items: [
          { label: "Thrivent Bank", url: "#" },
          { label: "Church Loans", url: "#" },
        ],
      },
      {
        title: "Investments",
        items: [
          { label: "Annuities", url: "#" },
          { label: "Mutual Funds", url: "#" },
          { label: "ETFs", url: "#" },
        ],
      },
      {
        title: "Insurance",
        items: [
          { label: "Life Insurance", url: "#" },
          { label: "Disability Income Insurance", url: "#" },
          { label: "Long-Term Care Strategy", url: "#" },
        ],
      },
    ],
    extra: {
      title: "Discover Thrivent ETFs",
      description:
        "Actively managed ETFs designed to help you reach your financial goals.",
      action: "Learn about Thrivent ETFs",
    },
  },
  {
    label: "Why Thrivent",
    description: "Learn why customers choose Thrivent",
    link: {
      label: "Why Thrivent",
    },
    sections: [
      {
        title: "Company",
        items: [
          {
            label: "About Us",
          },
          {
            label: "Our History",
          },
          {
            label: "Our Leadership",
          },
          {
            label: "Our Financials",
          },
        ],
      },
      {
        title: "Values",
        items: [
          {
            label: "Our Values",
          },
          {
            label: "Client Stories",
          },
        ],
      },
    ],
    extra: {
      title: "How We Give Back",
      description:
        "Our unique combination of financial services and generosity programs helps you make a difference with your money.",
      action: "Learn about our generosity",
    },
  },
  {
    label: "Generosity",
    description: "Learn about our unique generosity programs",
    link: { label: "Generosity" },
    sections: [
      {
        title: "Giving Back",
        items: [
          { label: "Generosity Programs" },
          { label: "Thrivent Charitable" },
        ],
      },
      {
        title: "Membership",
        items: [{ label: "Member Benefits" }],
      },
    ],
    extra: {
      title: "Client Story",
      description:
        "Doc's passion for giving back grew with Thrivent, allowing him to impact young people in his community.",
      action: "Read Doc's story",
    },
  },
  {
    label: "Resources",
    description: "Tools, calculators, FAQs, market insights & more",
    sections: [
      {
        title: "Learn",
        items: [
          { label: "Insights & Guidance" },
          { label: "Financial Education Events" },
          { label: "Market & Economic Update" },
          { label: "Tools & Calculators" },
          { label: "Thrivent Magazine" },
        ],
      },
      {
        title: "Get help",
        items: [
          { label: "Client Resources" },
          { label: "Claims" },
          { label: "FAQ" },
          { label: "Contact Us" },
        ],
      },
    ],
    extra: {
      title: "Looking for a Form?",
      description:
        "Download important forms or access online applications below.",
      action: "Search forms",
    },
  },
];
