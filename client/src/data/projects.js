export const projects = [
  {
    id: "financeos",

    hero: {
      title: "FinanceOS",
      subtitle: "AI-Powered Personal Finance Platform",
      description:
        "A full-stack personal finance platform designed to help users track expenses, understand spending patterns, and make smarter financial decisions.",
      year: "2026",
      duration: "3 Months",
      role: "Full Stack Developer",
      status: "Completed",
      featured: true,
      coverImage: "/projects/financeos/cover.png",
    },

    links: {
      live: "https://your-financeos-live-link.com",
      github: "https://github.com/yourusername/financeos",
    },

    overview: {
      heading: "A smarter way to manage personal finances",
      paragraphs: [
        "FinanceOS was built to simplify personal finance management through a clean, intuitive interface.",
        "The application combines expense tracking, analytics, receipt scanning, authentication, and AI-powered financial insights into one platform.",
        "The goal was to create a practical application that feels fast and easy to use while handling real-world financial data.",
      ],
    },

    techStack: {
      Frontend: ["React", "Tailwind CSS", "Recharts"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB"],
      AI: ["Gemini API", "Tesseract OCR"],
    },

    gallery: [
      {
        image: "/projects/financeos/dashboard.png",
        title: "Financial Dashboard",
        description:
          "A centralized dashboard that gives users a quick overview of their finances, expenses, and spending trends.",
      },
      {
        image: "/projects/financeos/transactions.png",
        title: "Transaction Management",
        description:
          "Users can add, edit, and manage transactions while keeping their financial records organized.",
      },
      {
        image: "/projects/financeos/analytics.png",
        title: "Interactive Analytics",
        description:
          "Visual analytics help users understand monthly spending patterns and identify where their money goes.",
      },
      {
        image: "/projects/financeos/ai-chat.png",
        title: "AI Financial Assistant",
        description:
          "An AI-powered assistant provides contextual financial insights and answers questions about spending behaviour.",
      },
    ],

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

    challenges: [
      {
        title: "Extracting Reliable Data from Receipts",
        problem:
          "Receipts come in different layouts, fonts, lighting conditions, and image qualities. Raw OCR output was often inconsistent.",
        solution:
          "Used Tesseract OCR for text extraction and added post-processing logic to clean the output, validate values, and map extracted text into a structured transaction format.",
      },
      {
        title: "Providing Useful AI Responses",
        problem:
          "A general AI model can generate generic financial advice that is not relevant to a user's actual spending.",
        solution:
          "Constructed prompts using the user's transaction history and spending context to produce more relevant financial insights.",
      },
    ],
  },

  {
    id: "triply",

    hero: {
      title: "Triply",
      subtitle: "AI-Powered Travel Planner",
      description:
        "An AI-powered travel planning application that helps users create personalized itineraries based on their destination, preferences, and travel requirements.",
      year: "2026",
      duration: "2 Months",
      role: "Frontend Developer",
      status: "Completed",
      featured: false,
      coverImage: "/projects/triply/cover.png",
    },

    links: {
      live: "https://your-triply-live-link.com",
      github: "https://github.com/yourusername/triply",
    },

    overview: {
      heading: "Planning trips with AI",
      paragraphs: [
        "Triply was created to make travel planning faster and more personalized.",
        "Users can provide their destination and preferences and receive an AI-generated travel plan tailored to their trip.",
        "The interface focuses on making the generated itinerary easy to understand, navigate, and use.",
      ],
    },

    techStack: {
      Frontend: ["React", "Tailwind CSS"],
      AI: ["Gemini API"],
      Tools: ["Vite", "JavaScript"],
    },

    gallery: [
      {
        image: "/projects/triply/explore.png",
        title: "Explore Destinations",
        description:
          "A clean interface for discovering destinations and starting the travel planning process.",
      },
      {
        image: "/projects/triply/login.png",
        title: "User Authentication",
        description:
          "A simple authentication interface designed to provide a smooth entry into the application.",
      },
      {
        image: "/projects/triply/packages.png",
        title: "Travel Packages",
        description:
          "Users can explore travel options and discover experiences relevant to their destination.",
      },
      {
        image: "/projects/triply/ai-planner.png",
        title: "AI Travel Planner",
        description:
          "The AI planner generates personalized travel recommendations and itineraries based on user preferences.",
      },
    ],

    features: [
      {
        title: "AI Itinerary Generation",
        description:
          "Generates personalized travel plans using Gemini AI.",
      },
      {
        title: "Destination Exploration",
        description:
          "Helps users discover destinations and travel experiences.",
      },
      {
        title: "Responsive Interface",
        description:
          "Designed to provide a consistent experience across desktop, tablet, and mobile devices.",
      },
    ],

    challenges: [
      {
        title: "Generating Useful Travel Plans",
        problem:
          "Generic AI responses often produced travel plans that were too broad or difficult to follow.",
        solution:
          "Structured prompts around destination, duration, preferences, and activities to generate more useful itineraries.",
      },
    ],
  },

  {
    id: "weather",

    hero: {
      title: "Weather Dashboard",
      subtitle: "Real-Time Weather Intelligence",
      description:
        "A responsive weather dashboard that provides current conditions, forecasts, and detailed weather insights for any searched location.",
      year: "2026",
      duration: "1 Month",
      role: "Frontend Developer",
      status: "Completed",
      featured: false,
      coverImage: "/projects/weather/cover.png",
    },

    links: {
      live: "https://your-weather-live-link.com",
      github: "https://github.com/yourusername/weather",
    },

    overview: {
      heading: "Weather information, made simple",
      paragraphs: [
        "The Weather Dashboard was built to provide useful weather information through a clean and responsive interface.",
        "Users can search for a location and view current conditions, temperature, humidity, wind, and upcoming forecasts.",
        "The application focuses on presenting real-time weather data in a way that is easy to scan and understand.",
      ],
    },

    techStack: {
      Frontend: ["React", "Tailwind CSS"],
      API: ["OpenWeatherMap"],
      Tools: ["Vite", "JavaScript"],
    },

    gallery: [
      {
        image: "/projects/weather/forecast.png",
        title: "Weather Forecast",
        description:
          "Search for a location and view current conditions, temperature, humidity, wind, and upcoming weather forecasts.",
      },
      {
        image: "/projects/weather/insights.png",
        title: "Weather Insights",
        description:
          "Explore detailed weather information through a clean and responsive interface designed for quick understanding.",
      },
    ],

    features: [
      {
        title: "Real-Time Weather",
        description:
          "Fetches current weather information for searched locations.",
      },
      {
        title: "Weather Forecast",
        description:
          "Provides upcoming weather conditions and forecasts.",
      },
      {
        title: "Weather Insights",
        description:
          "Presents detailed weather information in an easy-to-understand interface.",
      },
      {
        title: "Responsive Design",
        description:
          "Works smoothly across desktop, tablet, and mobile devices.",
      },
    ],

    challenges: [
      {
        title: "Handling Real-Time API Data",
        problem:
          "Weather data can vary depending on the searched location and API response.",
        solution:
          "Implemented structured API handling and conditional rendering to present available weather information reliably.",
      },
    ],
  },
];