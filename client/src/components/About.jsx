import { motion } from "framer-motion";

function About() {
  return (
    <section
  id="about"
  className="min-h-screen bg-[#111111]"
>
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

         

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            

            <span className="absolute top-8 left-8 w-3 h-3 rounded-full bg-orange-500"></span>
            <span className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="absolute top-1/2 right-4 w-4 h-4 rounded-full bg-orange-500"></span>

            <img
              src="/illustrations/about.png"
              alt="About Illustration"
              className="w-full max-w-[520px] object-contain"
            />
          </motion.div>

         

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[6px] text-orange-500 text-sm mb-4">
              About
            </p>

           <h2
  className="text-5xl lg:text-7xl font-black leading-none"
  style={{ color: "#ffffff" }}
>
  Building.
  <br />
  Learning.
   <br />
   Improving.
</h2>

            <div className="w-24 h-[2px] bg-orange-500 my-8"></div>

            <p className="text-gray-300 text-lg leading-9 max-w-xl">
              I'm a software engineering student who enjoys building digital
              products that are simple, reliable, and purposeful. My interests
              span full-stack development, AI-powered applications, and creating
              experiences that balance thoughtful design with solid engineering.
            </p>

            <p className="text-gray-300 text-lg leading-9 mt-8 max-w-xl">
             From designing interfaces to building APIs and integrating AI features, I like working across the stack and understanding how everything fits together. I'm constantly learning, experimenting, and turning ideas into working products.
            </p>

            
            <div className="grid grid-cols-2 gap-8 mt-14">

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Full Stack
                </h3>
                <p className="text-gray-300 mt-2 leading-7">
                  Building complete web applications from frontend interfaces to
                  backend systems.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Artificial Intelligence
                </h3>
                <p className="text-gray-300 mt-2 leading-7">
                  Exploring practical ways to integrate AI into modern software
                  products.
                </p>
              </div>

              <div>
               <h3 className="text-2xl font-semibold text-white">
                  Problem Solving
                </h3>
                <p className="text-gray-300 mt-2 leading-7">
                  Strengthening analytical thinking through Data Structures and
                  Algorithms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Continuous Learning
                </h3>
                <p className="text-gray-300 mt-2 leading-7">
                  Constantly learning, experimenting, and refining my approach
                  to software engineering.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;