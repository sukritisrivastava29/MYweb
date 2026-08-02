import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/contact", form);

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 w-full">


        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] text-[#8b6b4a] mb-3">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-[#2b2118]">
            Let's build something amazing together.
          </h2>

          <p className="mt-6 text-[#5d5248] leading-8 text-lg">
            Whether you have an opportunity, a project idea, or simply want to
            connect, I'd love to hear from you.
          </p>

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#8b6b4a] text-white flex items-center justify-center">
                <Mail />
              </div>

              <div>
                <p className="font-semibold">Email</p>
                <p className="text-[#6c6257]">
                  yourmail@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#8b6b4a] text-white flex items-center justify-center">
                <Phone />
              </div>

              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-[#6c6257]">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#8b6b4a] text-white flex items-center justify-center">
                <MapPin />
              </div>

              <div>
                <p className="font-semibold">Location</p>
                <p className="text-[#6c6257]">
                  India
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl border border-[#d8c8b7] p-10 shadow-xl"
        >

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-[#d7c8b8] rounded-xl px-5 py-4 outline-none focus:border-[#8b6b4a]"
            />

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-[#d7c8b8] rounded-xl px-5 py-4 outline-none focus:border-[#8b6b4a]"
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="border border-[#d7c8b8] rounded-xl px-5 py-4 mt-5 w-full outline-none focus:border-[#8b6b4a]"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="border border-[#d7c8b8] rounded-xl px-5 py-4 mt-5 w-full resize-none outline-none focus:border-[#8b6b4a]"
          />

          <button
            disabled={loading}
            className="mt-8 w-full bg-[#8b6b4a] hover:bg-[#715236] transition text-white py-4 rounded-xl flex items-center justify-center gap-3 font-semibold"
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>

        </motion.form>

      </div>
    </section>
  );
}

export default Contact;