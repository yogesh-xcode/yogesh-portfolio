"use client";

import { createLead } from "@/db/form";
import axios from "axios";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project_type: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.description.length > 500) {
      alert("Message must be 500 characters or less");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log(formData);
      const response = await createLead(formData);

      if (response.status != "error") {
        setSubmitStatus("success");

        await axios.post("/api/send-email", {
          name: formData.name,
          email: formData.email,
        });

        setFormData({ name: "", email: "", project_type: "", description: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ✨ Let's Build Something That Delivers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have an idea that needs a solid foundation? Let’s talk about what it
            takes to turn your concept into a real, user-ready product — built
            to last and ready to scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                🚀 Full-Stack Solutions I Deliver
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "📦 MVPs That Launch",
                    desc: "From database to deploy — I build fast, stable products that are user-ready.",
                  },
                  {
                    title: "🔗 System Integrations",
                    desc: "I connect your tools, services, and APIs into one seamless experience.",
                  },

                  {
                    title: "📈 Scalable Architectures",
                    desc: "You won’t need to rebuild later — I design systems that grow with your users.",
                  },
                  {
                    title: "🏥 MedTech Platforms",
                    desc: "I build healthcare apps that balance usability, compliance, and real-world workflows.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-8  space-y-6 mb-8 md:justify-around">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-line text-blue-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">yogesh.xcode@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-phone-line text-blue-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 74486 24928</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yogesh-xcode"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  <i className="ri-github-fill w-5 h-5 flex items-center justify-center"></i>
                </a>
                <a
                  href="https://linkedin.com/in/yogesh-xcode"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill w-5 h-5 flex items-center justify-center"></i>
                </a>
                <a
                  href="mailto:yogesh.xcode@gmail.com"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  <i className="ri-mail-line w-5 h-5 flex items-center justify-center"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Start the Conversation
              </h3>
              <p className="text-gray-600">
                Tell me about your project. I'll get back to you within 24 hours
                with honest thoughts on timeline, approach, and whether we're a
                good fit.
              </p>
            </div>

            <form
              id="contact-yogesh"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Type *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="project_type"
                  required
                  value={formData.project_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Project Type — MVP / AI / API / Full Product"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tell me about your project * (Max 500 characters)
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  maxLength={500}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  placeholder="What are you building? What's the main challenge? What's your timeline? Any specific requirements?"
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.description.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.description.length > 500}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="text-green-600 text-center font-medium bg-green-50 p-4 rounded-lg border border-green-200">
                  Thanks! I'll get back to you within 24 hours with honest
                  thoughts on your project.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="text-red-600 text-center font-medium bg-red-50 p-4 rounded-lg border border-red-200">
                  Something went wrong. Try emailing me directly at
                  {process.env.FREELANCER_EMAIL}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
