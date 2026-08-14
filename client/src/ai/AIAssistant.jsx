import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  FileText,

  
  Mail,
  Sparkles,
} from "lucide-react";


const PORTFOLIO_LINKS = {
  github: "https://github.com/sukritisrivastava29",
  linkedin: "https://www.linkedin.com/in/sukritisrivastava29/",
  leetcode: "https://leetcode.com/u/sukritisrv9/",
  resume: "#resume",
  projects: "#projects",
  contact: "#contact",
};

const suggestedPrompts = [
  "What is Sukriti's strongest project?",
  "What technologies does she use?",
  "How has she used AI?",
  "Why should I hire Sukriti?",
];



const getResponse = (message) => {
  const text = message.toLowerCase().trim();

 
  if (
    text.includes("why should i hire") ||
    text.includes("why hire") ||
    text.includes("why sukriti") ||
    text.includes("why should")
  ) {
    return {
      text: "Sukriti combines full-stack web development with hands-on AI integration. She has progressed from building foundational projects to developing applications like FinanceOS and Triply, working across the frontend, backend, APIs, databases, and AI features. She learns by building and focuses on turning ideas into working products.",
      links: [
        {
          label: "View projects",
          href: PORTFOLIO_LINKS.projects,
          icon: ArrowUpRight,
          internal: true,
        },
      ],
    };
  }

  if (
    text.includes("how to hire") ||
    text.includes("how can i hire") ||
    text.includes("hire sukriti") ||
    text.includes("contact") ||
    text.includes("reach her") ||
    text.includes("reach sukriti")
  ) {
    return {
      text: "You can reach Sukriti through the Contact section of this portfolio. She's focused on full-stack web development and is open to opportunities involving React, Node.js, and AI-powered applications.",
      links: [
        {
          label: "Contact Sukriti",
          href: PORTFOLIO_LINKS.contact,
          icon: Mail,
          internal: true,
        },
      ],
    };
  }

  
  if (
    text.includes("linkedin") ||
    text.includes("linked in")
  ) {
    return {
      text: "You can find Sukriti on LinkedIn and learn more about her professional background there.",
      links: [
        {
          label: "Open LinkedIn",
          href: PORTFOLIO_LINKS.linkedin,
         icon: ArrowUpRight,
        },
      ],
    };
  }

if (
  text.includes("leetcode") ||
  text.includes("leet code") ||
  text.includes("dsa") ||
  text.includes("coding profile")
) {
  return {
    text: "You can explore Sukriti's LeetCode profile to see her problem-solving practice and DSA work.",
    links: [
      {
        label: "Open LeetCode",
        href: PORTFOLIO_LINKS.leetcode,
        icon: ArrowUpRight,
      },
    ],
  };
}
  if (
    text.includes("github") ||
    text.includes("git hub") 
  ) {
    return {
      text: "You can explore Sukriti's GitHub to see her projects and source code.",
      links: [
        {
          label: "Open GitHub",
          href: PORTFOLIO_LINKS.github,
         icon: ArrowUpRight,
        },
      ],
    };
  }
  
if (
  text.includes("projects") ||
  text.includes("project")
) {
  return {
    text: "Sukriti has worked on projects ranging from foundational React and API applications to larger full-stack and AI-powered products. Her main projects include FinanceOS and Triply.",
    links: [
      {
        label: "View Projects",
        href: PORTFOLIO_LINKS.projects,
        icon: ArrowUpRight,
      },
    ],
  };
}
  if (
    text.includes("resume") ||
    text.includes("cv") ||
    text.includes("curriculum")
  ) {
    return {
      text: "You can view Sukriti's resume from the Resume section of the portfolio.",
      links: [
        {
          label: "View resume",
          href: PORTFOLIO_LINKS.resume,
          icon: FileText,
          internal: true,
        },
      ],
    };
  }

  if (
    text.includes("strongest project") ||
    text.includes("best project") ||
    text.includes("main project") ||
    text.includes("standout project") ||
    text.includes("most impressive project")
  ) {
    return {
      text: "FinanceOS is the strongest example of Sukriti's current development skills. It's a MERN-based finance platform combining expense tracking, analytics, receipt OCR, and AI-powered financial insights.",
      links: [
        {
          label: "Explore projects",
          href: PORTFOLIO_LINKS.projects,
          icon: ArrowUpRight,
          internal: true,
        },
      ],
    };
  }

  if (
    text.includes("projects") ||
    text.includes("project") ||
    text.includes("built") ||
    text.includes("portfolio")
  ) {
    return {
      text: "Sukriti's projects reflect her development journey. Weather Dashboard and Task Manager were foundational projects that helped her practice React, APIs, CRUD operations, and frontend development. Her more advanced work includes FinanceOS and Triply, where she moved into full-stack development and AI integration.",
      links: [
        {
          label: "View all projects",
          href: PORTFOLIO_LINKS.projects,
          icon: ArrowUpRight,
          internal: true,
        },
      ],
    };
  }

  if (
    text.includes("skills") ||
    text.includes("technologies") ||
    text.includes("technology") ||
    text.includes("tech stack") ||
    text.includes("stack") ||
    text.includes("what can she")
  ) {
    return {
      text: "Her main stack includes JavaScript, React, Tailwind CSS, Node.js, Express, and MongoDB. She's also worked with REST APIs, OCR, and Gemini API integrations.",
      links: [
        {
          label: "View skills",
          href: "#skills",
          icon: ArrowUpRight,
          internal: true,
        },
      ],
    };
  }

  if (
    text.includes("ai") ||
    text.includes("artificial intelligence") ||
    text.includes("ai experience") ||
    text.includes("machine learning")
  ) {
    return {
      text: "Sukriti has integrated AI into projects such as FinanceOS and Triply. Her AI work includes Gemini API integration, conversational interfaces, AI-generated content, and using AI to make existing applications more useful.",
      links: [
        {
          label: "Explore AI work",
          href: "#ai",
          icon: Sparkles,
          internal: true,
        },
      ],
    };
  }

  if (
    text.includes("financeos") ||
    text.includes("finance os") ||
    text.includes("finance")
  ) {
    return {
      text: "FinanceOS is a full-stack personal finance application built with React, Node.js, Express, and MongoDB. It includes expense tracking, transaction management, dashboards, analytics, receipt scanning with OCR, and AI-powered financial insights.",
      links: [
        {
          label: "View FinanceOS",
          href: PORTFOLIO_LINKS.projects,
          icon: ArrowUpRight,
          internal: true,
        },
      ],
    };
  }

  if (
    text.includes("triply") ||
    text.includes("travel planner") ||
    text.includes("travel ai")
  ) {
    return {
      text: "Triply is an AI-powered travel planner built with React and Gemini. It generates personalized travel plans based on user preferences and demonstrates Sukriti's experience integrating AI into a practical web application.",
      links: [
        {
          label: "View Triply",
          href: PORTFOLIO_LINKS.projects,
          icon: ArrowUpRight,
          internal: true,
        },
      ],
    };
  }

  if (
    text.includes("weather") ||
    text.includes("weather dashboard")
  ) {
    return {
      text: "The Weather Dashboard was one of Sukriti's foundational React projects. It helped her practice working with external APIs, fetching data, managing application state, and building a responsive interface.",
      links: [
        {
          label: "View projects",
          href: PORTFOLIO_LINKS.projects,
          icon: ArrowUpRight,
          internal: true,
        },
      ],
    };
  }


  if (
    text.includes("task manager") ||
    text.includes("task tracker") ||
    text.includes("tasks")
  ) {
    return {
      text: "The Task Manager was another foundational project focused on core full-stack concepts. It helped Sukriti practice CRUD operations, API integration, and connecting a frontend application with backend functionality.",
      links: [
        {
          label: "View projects",
          href: PORTFOLIO_LINKS.projects,
          icon: ArrowUpRight,
          internal: true,
        },
      ],
    };
  }

  if (
    text.includes("experience") ||
    text.includes("developer") ||
    text.includes("background")
  ) {
    return {
      text: "Sukriti is a full-stack web developer focused on React and the MERN stack. Her projects show a progression from learning core frontend and API concepts to building larger full-stack applications and integrating AI into them.",
      links: [
        {
          label: "View resume",
          href: PORTFOLIO_LINKS.resume,
          icon: FileText,
          internal: true,
        },
      ],
    };
  }

  if (
    text.includes("email") ||
    text.includes("mail")
  ) {
    return {
      text: "You can reach Sukriti through the Contact section of the portfolio.",
      links: [
        {
          label: "Contact Sukriti",
          href: PORTFOLIO_LINKS.contact,
          icon: Mail,
          internal: true,
        },
      ],
    };
  }


  return {
    text: "I can help you explore Sukriti's portfolio. Ask me about her projects, skills, AI work, FinanceOS, Triply, resume, GitHub, LinkedIn, or how to contact her.",
    links: [],
  };
};


export default function AIAssistant({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Sukriti's AI assistant. Ask me about her projects, skills, AI work, or experience.",
      links: [],
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);



  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

 
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

 

  const sendMessage = (message = input) => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isTyping) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: trimmedMessage,
        links: [],
      },
    ]);

    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(trimmedMessage);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.text,
          links: response.links,
        },
      ]);

      setIsTyping(false);
    }, 500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] w-[calc(100vw-2rem)] max-w-[420px]">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-[#FAFAF8] shadow-2xl">

        <div className="flex items-center justify-between border-b border-neutral-200 bg-[#FAFAF8] px-5 py-4">
          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-sm text-white">
              ✦
            </div>

            <div>
              <p className="text-sm font-medium text-neutral-900">
                Sukriti AI
              </p>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                <span className="text-[11px] text-neutral-500">
                  Portfolio assistant
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close AI assistant"
            className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            ×
          </button>
        </div>

      
        <div
          className="h-[360px] overflow-y-auto px-5 py-5"
          aria-live="polite"
        >
          <div className="space-y-4">

            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div className="max-w-[88%]">

                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "rounded-br-sm bg-neutral-900 text-white"
                        : "rounded-bl-sm border border-neutral-200 bg-white text-neutral-700"
                    }`}
                  >
                    {message.content}
                  </div>

            
                  {message.role === "assistant" &&
                    message.links?.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {message.links.map((link) => {
                          const Icon = link.icon;

                          return (
                            <a
                              key={link.label}
                              href={link.href}
                              target={
                                link.internal ? undefined : "_blank"
                              }
                              rel={
                                link.internal
                                  ? undefined
                                  : "noopener noreferrer"
                              }
                              onClick={() => {
                                if (link.internal) {
                                  onClose();
                                }
                              }}
                              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900"
                            >
                              <Icon size={13} strokeWidth={1.7} />

                              <span>{link.label}</span>

                              {!link.internal && (
                                <ArrowUpRight
                                  size={12}
                                  strokeWidth={1.7}
                                />
                              )}
                            </a>
                          );
                        })}
                      </div>
                    )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm border border-neutral-200 bg-white px-4 py-3">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" />

                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:150ms]" />

                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

    
        {messages.length === 1 && (
          <div className="border-t border-neutral-200 px-5 py-4">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400">
              Try asking
            </p>

            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-600 transition hover:border-neutral-400 hover:text-neutral-900"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="border-t border-neutral-200 p-4"
        >
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 transition focus-within:border-neutral-400">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Sukriti..."
              aria-label="Ask Sukriti AI"
              className="min-w-0 flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
            />

            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-white transition hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-30"
            >
              ↑
            </button>
          </div>

          <p className="mt-2 text-center text-[10px] text-neutral-400">
            AI-powered portfolio assistant
          </p>
        </form>
      </div>
    </div>
  );
}