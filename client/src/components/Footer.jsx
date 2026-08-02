import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f8f5f2] border-t border-[#e8ddd2] py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          
          <div>
            <h2 className="text-2xl font-bold text-[#2f241b]">
              Sukriti Srivastava
            </h2>

            <p className="mt-2 text-[#6b6258] max-w-md">
              Full Stack Developer passionate about building modern web
              applications with the MERN stack and exploring AI-powered
              solutions.
            </p>
          </div>

        
          <div className="flex gap-8 text-[#5b4a3a] font-medium">
            <a href="#home" className="hover:text-[#8b6b4a] transition">
              Home
            </a>

            <a href="#about" className="hover:text-[#8b6b4a] transition">
              About
            </a>

            <a href="#projects" className="hover:text-[#8b6b4a] transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-[#8b6b4a] transition">
              Contact
            </a>
          </div>

        
          <div className="flex gap-5 text-[#5b4a3a]">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8b6b4a] transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8b6b4a] transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="hover:text-[#8b6b4a] transition"
            >
              Email
            </a>
          </div>
        </motion.div>

       
        <div className="border-t border-[#e8ddd2] mt-10 pt-6 text-center text-[#8b8178] text-sm">
          © {year} Sukriti Srivastava. Built with React, Tailwind CSS & Framer Motion.
        </div>

      </div>
    </footer>
  );
}

export default Footer;