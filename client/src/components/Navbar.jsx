import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAF8]/90 backdrop-blur-md border-b border-neutral-300"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-14 h-24 flex items-center justify-between">

          

          <a
            href="#home"
            className="font-bold text-3xl tracking-tight"
          >
            SUKRITI.
          </a>

          

          <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-[3px]">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative"
              >
                {link.name}

                <span
                  className="absolute left-0 -bottom-2 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}

          </div>

         

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>
      </motion.nav>

      

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-[#FAFAF8] z-40 flex flex-col justify-center items-center gap-10 text-3xl"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}

export default Navbar;