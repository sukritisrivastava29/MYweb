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
      "/projects/financeos/dashboard.png",
      "/projects/financeos/analytics.png",
      "/projects/financeos/transactions.png",
      "/projects/financeos/receipt-scanner.png",
      "/projects/financeos/ai-chat.png",
      "/projects/financeos/mobile.png",
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
        title: "Receipt OCR",

        problem:
          "Receipt layouts vary significantly, making text extraction inconsistent.",

        solution:
          "Implemented image preprocessing and OCR to improve extraction accuracy before processing the data.",
      },
      {
        title: "AI Integration",

        problem:
          "Financial responses needed to remain relevant to the user's transaction history.",

        solution:
          "Structured prompts using user transaction data so Gemini could generate personalised financial insights.",
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
      "/projects/triply/home.png",
      "/projects/triply/itinerary.png",
      "/projects/triply/destinations.png",
      "/projects/triply/mobile.png",
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