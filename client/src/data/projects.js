export const projects = [
  {
    id: "financeos",

    hero: {
      number: "01",
      featured: true,

      title: "FinanceOS",
      subtitle: "AI-Powered Personal Finance Platform",

      year: "2026",
      role: "Full Stack Developer",
      duration: "3 Weeks",
      status: "Live",

      description:
        "A full-stack MERN finance platform featuring expense tracking, analytics, OCR receipt scanning, AI-powered insights, PDF reports, and secure authentication.",

      coverImage: "/projects/financeos/cover.png",
    },

    overview: {
      heading: "Building a smarter way to manage personal finances.",

      paragraphs: [
        "Managing personal finances is often more complicated than it needs to be. Many people rely on multiple applications, manually track expenses, and struggle to understand their spending habits.",

        "FinanceOS brings expense tracking, analytics, receipt scanning, reporting, and secure authentication into a single platform designed to simplify financial management.",

        "The platform integrates Google's Gemini AI to analyse spending patterns, answer financial questions, highlight unusual expenses, and provide practical recommendations, transforming a traditional expense tracker into an intelligent financial assistant.",
      ],
    },

    problem: {
      title: "The Problem",

      description:
        "Most budgeting applications require users to manually organise transactions and interpret financial data themselves. They provide numbers but rarely deliver meaningful insights or personalised guidance.",
    },

    solution: {
      title: "The Solution",

      description:
        "FinanceOS combines expense management, OCR receipt scanning, AI-powered financial insights, interactive analytics, and PDF reporting into one seamless experience, helping users make better financial decisions.",
    },

    features: [
      {
        title: "OCR Receipt Scanner",
        description:
          "Extracts transaction information from receipts using Tesseract OCR.",
      },
      {
        title: "AI Financial Insights",
        description:
          "Gemini AI analyses spending behaviour and answers finance-related questions.",
      },
      {
        title: "Interactive Analytics",
        description:
          "Visual dashboards built with Recharts help users understand spending trends.",
      },
      {
        title: "Secure Authentication",
        description:
          "JWT authentication protects user accounts and financial data.",
      },
    ],

  gallery: [
  {
    title: "Financial Dashboard",
    description:
      "Monitor income, expenses, savings, and recent transactions from a clean dashboard designed to provide an instant overview of your financial health.",
    image: "/projects/financeos/dashboard.png",
  },
  {
    title: "Expense Analytics",
    description:
      "Interactive charts built with Recharts visualize monthly trends and category-wise spending, helping users better understand their finances.",
    image: "/projects/financeos/analytics.png",
  },
  {
    title: "Transaction Management",
    description:
      "Search, filter, edit, and organize every transaction through a fast and intuitive interface.",
    image: "/projects/financeos/transactions.png",
  },
  {
    title: "Receipt Scanner",
    description:
      "Upload receipts and automatically extract merchant, amount, date, and category using Tesseract OCR, eliminating manual entry.",
    image: "/projects/financeos/receipt-scanner.png",
  },
  {
    title: "AI Financial Assistant",
    description:
      "Gemini AI analyzes spending patterns, answers financial questions, and delivers personalized budgeting recommendations in real time.",
    image: "/projects/financeos/ai-chat.png",
  },
  {
    title: "PDF Report Export",
    description:
      "Generate professional financial reports containing transaction summaries, analytics, and visual insights that can be downloaded instantly.",
    image: "/projects/financeos/pdf-report.png",
  },
  {
    title: "Responsive Mobile Experience",
    description:
      "Every screen is fully responsive, providing a seamless experience across desktop, tablet, and mobile devices.",
    image: "/projects/financeos/mobile.png",
  },
],

    techStack: {
      frontend: ["React", "Tailwind CSS"],

      backend: ["Node.js", "Express"],

      database: ["MongoDB"],

      ai: ["Gemini API", "Tesseract OCR"],

      authentication: ["JWT"],

      visualization: ["Recharts"],
    },

    challenges: [
  {
    title: "Extracting Reliable Data from Receipts",

    problem:
      "Receipts come in different layouts, fonts, lighting conditions, and image qualities. Raw OCR output was often inconsistent, making it difficult to accurately identify merchants, amounts, and transaction dates.",

    solution:
      "Used Tesseract OCR for text extraction and added post-processing logic to clean the output, validate values, and map extracted text into a structured transaction format before saving it to the database.",
  },

  {
    title: "Providing Useful AI Responses",

    problem:
      "A general AI model can generate generic financial advice that isn't relevant to a user's actual spending habits.",

    solution:
      "Constructed prompts using the user's transaction history and spending summaries so Gemini could generate personalized insights instead of generic responses.",
  },

  {
    title: "Keeping Financial Data Secure",

    problem:
      "Financial applications require secure authentication and protected API endpoints to prevent unauthorized access to sensitive user information.",

    solution:
      "Implemented JWT-based authentication, protected backend routes with middleware, and ensured each request only accessed data belonging to the authenticated user.",
  },

  {
    title: "Building Responsive Analytics",

    problem:
      "Charts and dashboards needed to remain readable and responsive across desktops, tablets, and mobile devices while handling changing datasets.",

    solution:
      "Designed reusable chart components with Recharts, optimized layouts using Tailwind CSS, and ensured visualizations adapted smoothly to different screen sizes.",
  },
],

    learnings: [
      "Designing scalable REST APIs.",
      "Managing authentication securely using JWT.",
      "Integrating generative AI into real-world applications.",
      "Working with OCR and structured financial data.",
    ],

    links: {
      github:
        "https://github.com/sukritisrivastava29/Finance-OS",

      live:
        "https://finance-os-two-gilt.vercel.app/",
    },
  },

  {
    id: "triply",

    hero: {
      number: "02",

      featured: false,

      title: "Triply",

      subtitle: "AI Travel Planner",

      year: "2026",

      role: "Frontend Developer",

      duration: "1 Week",

      status: "Live",

      description:
        "Generate personalised travel itineraries with AI and discover destinations tailored to your preferences.",

      coverImage: "/projects/triply/cover.png",
    },

    overview: {
      heading: "Planning travel with AI instead of endless searching.",

      paragraphs: [],
    },

    problem: {},

    solution: {},

    features: [],
gallery: [
  {
    image: "/projects/triply/cover.png",
    title: "Triply",
    description:
      "A modern travel planning platform that helps users discover destinations and create personalized trips.",
  },
  {
    image: "/projects/triply/ai-planner.png",
    title: "AI Trip Planner",
    description:
      "Generate personalized travel itineraries using Gemini AI based on your destination, budget, duration, and travel style.",
  },
  {
    image: "/projects/triply/explore.png",
    title: "Explore Destinations",
    description:
      "Discover destinations through a clean and intuitive interface designed to make travel inspiration effortless.",
  },
  {
    image: "/projects/triply/packages.png",
    title: "Travel Packages",
    description:
      "Browse curated travel packages and explore different options for planning your next trip.",
  },
  {
    image: "/projects/triply/login.png",
    title: "Authentication",
    description:
      "A simple authentication experience that gives users a seamless way to access their personalized travel planning.",
  },
],

    techStack: {
      frontend: ["React", "Tailwind CSS"],

      backend: [],

      database: ["Firebase"],

      ai: ["Gemini API"],
    },

    challenges: [],

    learnings: [],

    links: {
      github:
        "https://github.com/sukritisrivastava29/Triply",

      live:
        "https://triply-fawn.vercel.app/",
    },
  },

  {
    id: "weather",

    hero: {
      number: "03",

      featured: false,

      title: "Weather Dashboard",

      subtitle: "Real-Time Weather Application",

      year: "2026",

      role: "Frontend Developer",

      duration: "3 Days",

      status: "Live",

      description:
        "Responsive weather dashboard with live forecasts, location search, and OpenWeather integration.",

      coverImage: "/projects/weather/cover.png",
    },

    overview: {
      heading: "Making weather information simple and accessible.",

      paragraphs: [],
    },

    problem: {},

    solution: {},

    features: [],

    gallery: [
      "/projects/weather/dashboard.png",
      "/projects/weather/forecast.png",
      "/projects/weather/search.png",
      "/projects/weather/mobile.png",
    ],

    techStack: {
      frontend: ["React", "Tailwind CSS"],

      backend: [],

      database: [],

      api: ["OpenWeather API"],
    },

    challenges: [],

    learnings: [],

    links: {
      github:
        "https://github.com/sukritisrivastava29/weather_dashboard",

      live:
        "https://weather-dashboard-nu-rosy.vercel.app",
    },
  },
];