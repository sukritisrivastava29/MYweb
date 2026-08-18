import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#111111] flex items-center py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[6px] text-orange-500 text-sm mb-4">
              Contact
            </p>

            <h2
  className="text-5xl lg:text-7xl font-black leading-none"
  style={{ color: "#ffffff" }}
>
  Let's create
  <br />
  what's Next
</h2>

            <div className="w-24 h-[2px] bg-orange-500 my-8"></div>

            <p className="text-gray-300 text-lg leading-9 max-w-xl">
              I'm always interested in meaningful work, ambitious ideas,
              and conversations that lead to thoughtful products.
              Whether you're building something new, exploring
              collaborations, or simply exchanging ideas, I'd be glad
              to connect.
            </p>

            <div className="mt-12 space-y-6">

            
              <a
                href="sukriti.srivastava2903@gmail.com"
                className="group flex items-center justify-between border-b border-neutral-800 pb-4 hover:border-orange-500 transition-all"
              >
                <div className="flex items-center gap-4">
                  <Mail
                    size={20}
                    className="text-orange-500"
                  />

                  <span className="text-gray-200">
                   sukriti.srivastava2903@gmail.com
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-gray-500 group-hover:text-orange-500 transition"
                />
              </a>

              <a
                href="https://github.com/sukritisrivastava29"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-neutral-800 pb-4 hover:border-orange-500 transition-all"
              >
                <div className="flex items-center gap-4">
                  <FaGithub
                    size={20}
                    className="text-orange-500"
                  />

                  <span className="text-gray-200">
                    GitHub
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-gray-500 group-hover:text-orange-500 transition"
                />
              </a>

            

              <a
                href="https://www.linkedin.com/in/sukritisrivastava29/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-neutral-800 pb-4 hover:border-orange-500 transition-all"
              >
                <div className="flex items-center gap-4">
                  <FaLinkedin
                    size={20}
                    className="text-orange-500"
                  />

                  <span className="text-gray-200">
                    LinkedIn
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-gray-500 group-hover:text-orange-500 transition"
                />
              </a>

            </div>
          </motion.div>

          {/* Right Illustration */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Orange Accent Dots */}

            <span className="absolute top-8 left-8 w-3 h-3 rounded-full bg-orange-500"></span>
            <span className="absolute bottom-12 right-8 w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="absolute top-1/3 right-0 w-4 h-4 rounded-full bg-orange-500"></span>

            <img
              src="/illustrations/contact.png"
              alt="Contact Illustration"
              className="w-full max-w-[520px] object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;