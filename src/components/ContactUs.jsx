"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { slideIn,staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import CharacterCanvas from "@/components/CharacterCanvas";

export const metadata = {
  title: "Contact Us - SA Studios",
  description:
    "Get in touch with Salman Ali Studios. Share your ideas, ask questions, or discuss collaborations. We're here to help you bring your vision to life.",
};
export default function ContactPage() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    confirmed: false,
  });

  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.confirmed) return;

    setLoading(true);
    setConfirmation("");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          to_name: process.env.NEXT_PUBLIC_EMAILJS_TO_NAME,
          email: formData.email,
          to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setConfirmation("Thank you! I will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          message: "",
          confirmed: false,
        });
        setTimeout(() => setConfirmation(""), 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again.");
        setTimeout(() => setConfirmation(""), 5000);
      });
  };

  const isChecked = formData.confirmed;

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      id="contact"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0`}
    >
   
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-gray-900 p-8 rounded-2xl"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Insert your name here..."
                required
                className="w-full px-4 py-3 rounded-md bg-tertiary border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                required
                className="w-full px-4 py-3 rounded-md bg-tertiary border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-md bg-tertiary border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
              />
            </div>

            <div className="flex items-start gap-2 text-white text-sm">
              <input
                type="checkbox"
                id="confirmed"
                name="confirmed"
                checked={formData.confirmed}
                onChange={handleChange}
                className="mt-1 mr-2 w-4 h-4 text-[#915EFF] bg-gray-700 border-gray-600 rounded focus:ring-[#915EFF]"
              />
              <label htmlFor="confirmed" className="text-sm">
                I confirm that I am over 13 years old. By filling out this form
                and submitting, you are agreeing to our privacy policy.
              </label>
            </div>

            <button
              type="submit"
              disabled={!isChecked || loading}
              className={`w-full py-3 rounded-full shadow-lg  font-bold transition-colors ${
                !isChecked || loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-500 transition-all"
              }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {confirmation && (
              <p
                className={`mt-4 text-center ${
                  confirmation.includes("Thank")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {confirmation}
              </p>
            )}
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <CharacterCanvas />
        </motion.div>
      </div>
    </motion.section>
  );
}
