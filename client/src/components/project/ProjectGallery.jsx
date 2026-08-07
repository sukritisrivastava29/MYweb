import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function ProjectGallery({ project }) {
  if (!project.gallery?.length) return null;

  return (
    <section className="border-t border-neutral-200 bg-[#FAFAF8] py-28">
      <Container>
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-neutral-900">
            Inside {project.hero.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Explore the application's core workflows, interface, and user
            experience through some of its key screens.
          </p>
        </div>

        <div className="space-y-32">
          {project.gallery.map((item, index) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Screenshot */}
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
              >
                {/* Browser Bar */}
                <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-5 py-4">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Description */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                  Screen {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-4xl font-black tracking-tight text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}