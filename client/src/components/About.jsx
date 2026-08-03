import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "Projects Built",
  },
  {
    number: "50+",
    label: "LeetCode Problems",
  },
  {
    number: "2027",
    label: "Graduation Year",
  },
  {
    number: "MERN",
    label: "Primary Stack",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-[#141414] text-white py-32"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="uppercase tracking-[5px] text-[#E66A1F] font-semibold">
              About Me
            </p>

            <h2 className="mt-5 text-5xl md:text-7xl font-bold leading-none">
              Creating
              <br />
              software that
              <br />
              matters.
            </h2>

            <p className="mt-10 text-lg leading-9 text-neutral-300">
              I'm Sukriti Srivastava, an Electronics & Communication Engineering
              student passionate about full-stack development and AI-powered
              applications. I enjoy turning ideas into products that are fast,
              scalable, and easy to use.
            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-300">
              My journey started with curiosity about how websites work, and it
              has grown into building complete MERN applications, solving Data
              Structures & Algorithms problems, and continuously learning modern
              technologies to become a better software engineer.
            </p>

          </motion.div>

         

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="grid grid-cols-2 gap-6">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="border border-neutral-700 p-8"
                >
                  <h3 className="text-5xl font-bold text-[#E66A1F]">
                    {item.number}
                  </h3>

                  <p className="mt-4 uppercase tracking-[3px] text-sm text-neutral-400">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-12 border border-neutral-700 p-8">

              <p className="uppercase tracking-[4px] text-[#E66A1F] mb-5">
                Current Focus
              </p>

              <h3 className="text-3xl font-bold">
                MERN Stack · AI Applications · DSA
              </h3>

              <p className="mt-6 text-neutral-300 leading-8">
                Currently focused on building full-stack applications,
                strengthening problem-solving skills, and exploring AI-driven
                solutions that create meaningful user experiences.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;