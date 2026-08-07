import { motion } from "framer-motion";
import {
  Calendar,
  Clock3,
  User,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function ProjectHero({ project }) {
  const { hero, links } = project;

  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-[#FAFAF8] pt-32 pb-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {hero.featured && (
              <div className="mb-6">
                <Badge>Featured Project</Badge>
              </div>
            )}

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              Case Study
            </p>

            <h1 className="mt-5 text-6xl font-black tracking-tight text-neutral-900">
              {hero.title}
            </h1>

            <p className="mt-4 text-2xl font-medium text-orange-500">
              {hero.subtitle}
            </p>

            <p className="mt-8 max-w-xl text-lg leading-9 text-neutral-600">
              {hero.description}
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="text-orange-500" size={20} />
                <div>
                  <p className="text-sm text-neutral-500">Year</p>
                  <p className="font-semibold">{hero.year}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 className="text-orange-500" size={20} />
                <div>
                  <p className="text-sm text-neutral-500">Duration</p>
                  <p className="font-semibold">{hero.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <User className="text-orange-500" size={20} />
                <div>
                  <p className="text-sm text-neutral-500">Role</p>
                  <p className="font-semibold">{hero.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-500" size={20} />
                <div>
                  <p className="text-sm text-neutral-500">Status</p>
                  <p className="font-semibold">{hero.status}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button href={links.live}>
                Live Demo
                <ArrowUpRight size={18} className="ml-2" />
              </Button>

              <Button href={links.github} variant="secondary">
                GitHub
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-5 py-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <img
                src={hero.coverImage}
                alt={hero.title}
                className="block w-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}